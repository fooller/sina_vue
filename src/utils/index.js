

/**
 *
 * @param obj 日期对象或者字符串
 * 日期的格式转换
 * @returns {string}
 */
export function dateFormat(obj) {
  if (typeof obj === "object") {
    let year = obj.getFullYear();
    let month = obj.getMonth() + 1;
    let todayDate = obj.getDate();
     if (month < 10) {
      month = '0' + month;
    }
    return year + '-' + month + '-' + todayDate;
  }
  if (typeof obj === "string") {
    return obj.slice(0, 10);
  }
}
/**
 *
 * @param obj 日期对象
 * @returns {string} 2017-07
 */
export function dateFormatMon(obj) {

  if (typeof obj === "object") {
    let year = obj.getFullYear();
    let month = obj.getMonth() + 1;
    if (month < 10) {
      month = '0' + month;
    }
    return year + '-' + month;
  } else {
    return obj;
  }

}

/**
 * 实现数组，对象的深拷贝
 * @param o
 * @returns {*}
 */
export function deepCopy(o) {
  if (o instanceof Array) {
    var n = [];
    for (var i = 0; i < o.length; ++i) {
      n[i] = deepCopy(o[i]);
    }
    return n;

  } else if (o instanceof Object) {
    var n = {}
    for (var i in o) {
      n[i] = deepCopy(o[i]);
    }
    return n;
  } else {
    return o;
  }
}


