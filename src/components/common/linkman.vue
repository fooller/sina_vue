<template>
    <!-- <transition name="slide"> -->
    <!-- <div class="xin-widget-citys animated" v-if="isShow"> -->
    <div class="xin-widget-citys animated">
        <div class="xin-widget-citys-content">
            <div class="headTitle" :class="{ios:$store.state.asset.ios}">
                <span @click.stop="goBack" class="left">返回</span>
                请选择联系人
                <span @click.stop="closePage" class="right">
                    关闭
                </span>
            </div>
            <div class="layout title" :class="{ios:$store.state.asset.ios}">
                <!-- 下面是搜索框 -->
                <div class="xin-widget-citys-header bdb">
                    <div class="xin-widget-citys-iptbox">
                        <input type="text" @blur="blurFn" @focus="focuspointer" placeholder="点击搜索" v-model="input">
                    </div>
                    <a href="javascript:void(0)" v-if="cancelShow" @click.stop="hide">取消</a>
                </div>
                <!-- 当前城市的页面 ,可以当做部门的列表-->
                <div @click.stop="clickDepartment(item.dept_code)" class="xin-widget-citys-local bdb" v-for="(item,index) in DeptList" :key="index">
                    <i style="color:#8492A6;font-size:20px;" class="iconfont icon-bumen16"></i>
                    {{item.short_name}}</div>
                <div class="xin-widget-citys-list">
                    <dl>
                        <template v-for="(item, key) in LinkList" v-if="item.hidden=='false'">
                            <dd class="bdb" @click.stop="_chooseOne(item)">
                                <i style="color:#8492A6;font-size:20px;" class="iconfont icon-renyuan"></i>
                                {{item.name}}</dd>
                        </template>
                    </dl>
                </div>
            </div>
            <!-- 下面是搜索出来的列表,隐藏最大的这个盒子即可 -->
            <div v-if="searchShow" class="xin-widget-citys-searchlist" :class="{ios:ios}">
                <ul v-if="searchList.length>0">
                    <li class="bdb" v-for="(item,index) in searchList" @click="_chooseOne(item)" :key="index">{{item.name}}</li>
                </ul>
                <div v-else class="nomatch">没有匹配的人名</div>
            </div>
        </div>
    </div>
    <!-- </transition> -->
</template>

<script>
import { Icon } from "vux";
import { $http, http } from "../../utils/common";
import { deepCopy } from "../../utils/index";

export default {
    components: {
        Icon
    },
    
    props: {
        isShow: {
            type: Boolean,
            default: false,
            required: false
        },
        ios: {
            type: Boolean,
            default: false,
            required: false
        },
        onChoose: {
            type: Function
        },
        departmentData: {
            type: Array,
            default: [{ short_name: "admin" }]
        },
        linkmanData: {
            type: Array,
            default: [{ name: "admin" }]
        },
        /**
         * 点击搜索框右边的取消按钮的回调
         */
        close: {
            type: Function
        }
    },
    data: function () {
        return {
            searchShow: false,// 控制搜索结果面板
            cancelShow:false,// 控制搜索框右边的取消按钮
            input: '', // 绑定搜索框的值
            searchList: [], //搜索结果
            DeptList: deepCopy(this.departmentData),
            LinkList: deepCopy(this.linkmanData),
            tempDeptList: [], // 临时存取部门列表
            tempLinkList: [],// 临时存取人员列表
            type:null, // 'out' 判断是进入还是返回，再调取接口
            treeIndex:0, // 进入的部门的层级
            deptList:[], // 记录每一级的deptcode

        }
    },
    watch: {
        input: function () {
            // 当文本框内容发生变化时
            this._search();
        }

    },
    methods: {
        focuspointer() {
            // 搜索框获取焦点的事件回调
            this.cancelShow = true;
            this.tempDeptList = this.DeptList;
            this.tempLinkList = this.LinkList;
            this.DeptList = [];
            this.LinkList = [];
            this.searchShow = true;
        },
        blurFn(){
            // 输入框失去焦点回调
            this.cancelShow = false;
            // this.hide();
        },
        goBack(){
            if (this.treeIndex == 0) {
                this.reset();
            } else if (this.treeIndex == 1) {
                this.$vux.loading.show({
                    text: '加载中'
                })
                this.type = "out";
                this.getDataList(window.deptCode, window.deptCode);
            } else {
                this.$vux.loading.show({
                    text: '加载中'
                })
                this.type = "out";
                this.getDataList(this.deptList[this.treeIndex - 2], this.deptList[this.treeIndex - 2]);
            }
        },
        reset() {
            this.input = '';
            this.searchList = [];
            this.type = null;
            this.cancelShow = false;
            this.close && this.close();

        },
        hide() {
            this.input = '';
            this.searchList = [];
            this.DeptList = this.tempDeptList;
            this.LinkList = this.tempLinkList;
            this.searchShow = false;
        },
        closePage() {
            // 关闭该选联系人页面
            this.reset();
        },
        _search: function () {
            let url = "/assetmanage/api/searchUsers";
            let data = { searchText: this.input };
            http(url, data, res => {
                if (res.data.responseResult.code == 200) {
                    this.searchList = res.data.responseResult.info
                };
            })
        },
        _chooseOne: function (obj) {
            // 为了取消掉vue带的set，get进行的两次转换
            this.onChoose && this.onChoose(JSON.parse(JSON.stringify(obj)));
            // 周明润添加
            this.$emit('setShow',false);
        },
        clickDepartment(id) {
            // 点击部门，出现loading
            this.deptList.push(id);
            this.type = "in";
            this.$vux.loading.show({
                text: '加载中'
            })
            this.getDataList(id, id);
        },
        getDataList(id1, id2) {
            // 获取部门和人员,根据部门id去查相应的部门和部门下的人
            this.$axios.all([this.getDepartment(id1), this.getUserList(id2)])
                .then(this.$axios.spread((departList, linkmanlist) => {
                    if (departList.data.responseResult.code == 200 && linkmanlist.data.responseResult.code == 200) {
                         // 两个请求现已完成 
                        if (this.type == "in") {
                            this.treeIndex++;
                        } else {
                            this.treeIndex--;
                            this.deptList.pop();
                        }
                        this.$vux.loading.hide();
                        this.DeptList = departList.data.responseResult.info;
                        this.LinkList = linkmanlist.data.responseResult.info;
                    } else {
                        this.$vux.toast.show({
                            text: '审批人获取失败',
                            type: "warn"
                        });
                    }

                }));
        },
        getDepartment(deptCode) {
            // 获取所有部门
            let url = "/assetmanage/api/getDepts";
            let data = { deptCode: deptCode };
            return $http(url, { params: data })
        },
        getUserList(deptCode) {
            // 获取联系人列表，也可以根据部门id获取部门下的联系人
            let data = { deptCode: deptCode };
            let url = "/assetmanage/api/getUserList";
            return $http.get(url, { params: data })
        },
    }
}
</script>
<style lang="less" scoped>
@import "./linkman.less";
</style>
