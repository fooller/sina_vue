/**
 * Created by admin on 2017/7/26.
 */
import axios from 'axios';
export const deptCode = "甘肃银行"
// export const deptCode = "兰州银行"
let baseUrl = window.baseUrl||"";
export const minuteList = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];

// 全局配置axios
axios.defaults.withCredentials = true;
// 响应拦截，状态码为1005时，返回登录页，里面可以添加loading
axios.interceptors.response.use(res => {
  // 登录失效的判断
  if (res.data.code == 1005) {
    //  1005 假如这个是登录失效的

  }
  return res;
});

/**
 * @param url 请求的url
 * @param data post发送的数据
 */
export function http(url, data, callback) {
  let config = {
    method: 'post',
    baseURL: baseUrl,
    url: url,
    timeout: 30000,
    params: data,
    headers: {
      'X-Requested-With': 'XMLHttpRequest'
    },
    requestHeader: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };
  axios(config).then(callback);
}

// 创建axios实例
export const $http = axios.create({
  baseURL: baseUrl, // api的base_url
  timeout: 30000, // 请求超时时间
  requestHeader: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
});

/**
 * 数字金额大写转换(可以处理整数,小数,负数
 * @param n
 * @returns {string}
 */
export function digitUp(n) {
  var fraction = ['角', '分'];
  var digit = [
    '零', '壹', '贰', '叁', '肆',
    '伍', '陆', '柒', '捌', '玖'
  ];
  var unit = [
    ['元', '万', '亿'],
    ['', '拾', '佰', '仟']
  ];
  var head = n < 0 ? '负' : '';
  n = Math.abs(n);
  var s = '';
  for (var i = 0; i < fraction.length; i++) {
    s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
  }
  s = s || '整';
  n = Math.floor(n);
  for (var i = 0; i < unit[0].length && n > 0; i++) {
    var p = '';
    for (var j = 0; j < unit[1].length && n > 0; j++) {
      p = digit[n % 10] + unit[1][j] + p;
      n = Math.floor(n / 10);
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
  }
  return head + s.replace(/(零.)*零元/, '元')
    .replace(/(零.)+/g, '零')
    .replace(/^整$/, '零元整');
};

/**
 *  获取url参数
 * @param name
 * @returns {null}
 */
// export function getQueryString(name) {
//   //获取url中"?"符后的字串
//   var url = location.href.split("?");
//   if (url.length > 1) {
//     var urlarr = url[1];
//     var arr = urlarr.split("&");
//     var obj = {};
//     arr.forEach(item => {
//       let subArrry = item.split("=");
//       obj[subArrry[0]] = subArrry[1];
//     })
//     return obj[name];
//   } else {
//     return undefined;
//   }

// }

export function getQueryString(name) {
  //获取url中"?"符后的字串
  var url = location.href.split("?");
  if (url.length >1) {
    var urlarr = url[1];
    var arr = urlarr.split("&");
    var obj = {};
    if(arr.length>1){
      arr.forEach(item => {
        let subArrry = item.split("=");
        if(subArrry[1].indexOf("#")>=0){
          let temp = subArrry[1].split("#")[0];
          obj[subArrry[0]] = temp;
        }else{
          obj[subArrry[0]] = subArrry[1];
        }
      })
      return obj[name];
    }else{
      let temp = arr[0].split("=");
      return temp[1].split("#")[0];
    }
    
  } else {
    return undefined;
  }

}



/**
 * 判断设备信息
 *
 * @export
 * @returns
 */
export function webType() {
  var u = navigator.userAgent;
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  return {
    isAndroid: isAndroid,
    isiOS: isiOS
  }

}


/**
 * 去掉字符串前后的空格
 * @param  {[string]} str [参数]
 * @return {[string]}     [去掉空格后的str]
 */
export function trim(str) {
  return str.replace(/^(\s|\u00A0)+/, '').replace(/(\s|\u00A0)+$/, '');
};

/**
 * base64字符串转换为Blob对象（和file对象大同小异）
 * @param dataurl
 * @returns {*}
 */
export function imgToBlob(dataurl) {
  let arr = dataurl.split(',');
  let mime = arr[0].match(/:(.*?);/)[1];
  let bstr = atob(arr[1]);
  let n = bstr.length;
  let u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  };
  return new Blob([u8arr], {
    type: mime
  });
}

export function getUrlString(urlname, name) {
  //获取url中"?"符后的字串
  var url = urlname.split("?");
  var urlarr = url[1];
  var arr = urlarr.split("&");
  var obj = {};
  arr.forEach(item => {
    let subArrry = item.split("=");
    obj[subArrry[0]] = subArrry[1];
  })
  return obj[name];
}

/**
 * @export 正整数校验
 * @param {any} val 
 * @returns 
 */
export function testNumber(val){ 
    var reg = /^[1-9]\d*$/;
    return reg.test(val);
}