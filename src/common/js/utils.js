/**
 * 时间戳格式化函数
 * @param  {string} format    格式
 * @param  {int}    timestamp 要格式化的时间 默认为当前时间
 * @return {string}           格式化的时间字符串
 * dateFormat('Y-m-d','1350052653000');//很方便的将时间戳转换成了2012-10-11
 * dateFormat('Y-m-d H:i:s','1350052653000');//得到的结果是2012-10-12 22:37:33
 */
export function dateFormat(format, timestamp) {
  var a,
    jsdate = timestamp ? new Date(timestamp) : new Date()
  var pad = function(n, c) {
    if ((n = n + '').length < c) {
      return new Array(++c - n.length).join('0') + n
    } else {
      return n
    }
  }
  var txt_weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  var txt_ordin = {
    1: 'st',
    2: 'nd',
    3: 'rd',
    21: 'st',
    22: 'nd',
    23: 'rd',
    31: 'st'
  }
  var txt_months = [
    '',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  var f = {
    // Day
    d: function() {
      return pad(f.j(), 2)
    },
    D: function() {
      return f.l().substr(0, 3)
    },
    j: function() {
      return jsdate.getDate()
    },
    l: function() {
      return txt_weekdays[f.w()]
    },
    N: function() {
      return f.w() + 1
    },
    S: function() {
      return txt_ordin[f.j()] ? txt_ordin[f.j()] : 'th'
    },
    w: function() {
      return jsdate.getDay()
    },
    z: function() {
      return ((jsdate - new Date(jsdate.getFullYear() + '/1/1')) / 864e5) >> 0
    },

    // Week
    W: function() {
      var a = f.z(),
        b = 364 + f.L() - a
      var nd2,
        nd = (new Date(jsdate.getFullYear() + '/1/1').getDay() || 7) - 1
      if (b <= 2 && (jsdate.getDay() || 7) - 1 <= 2 - b) {
        return 1
      } else {
        if (a <= 2 && nd >= 4 && a >= 6 - nd) {
          nd2 = new Date(jsdate.getFullYear() - 1 + '/12/31')
          return date('W', Math.round(nd2.getTime() / 1000))
        } else {
          return (1 + (nd <= 3 ? (a + nd) / 7 : (a - (7 - nd)) / 7)) >> 0
        }
      }
    },

    // Month
    F: function() {
      return txt_months[f.n()]
    },
    m: function() {
      return pad(f.n(), 2)
    },
    M: function() {
      return f.F().substr(0, 3)
    },
    n: function() {
      return jsdate.getMonth() + 1
    },
    t: function() {
      var n
      if ((n = jsdate.getMonth() + 1) == 2) {
        return 28 + f.L()
      } else {
        if ((n & 1 && n < 8) || (!(n & 1) && n > 7)) {
          return 31
        } else {
          return 30
        }
      }
    },

    // Year
    L: function() {
      var y = f.Y()
      return !(y & 3) && (y % 1e2 || !(y % 4e2)) ? 1 : 0
    },
    //o not supported yet
    Y: function() {
      return jsdate.getFullYear()
    },
    y: function() {
      return (jsdate.getFullYear() + '').slice(2)
    },

    // Time
    a: function() {
      return jsdate.getHours() > 11 ? 'pm' : 'am'
    },
    A: function() {
      return f.a().toUpperCase()
    },
    B: function() {
      // peter paul koch:
      var off = (jsdate.getTimezoneOffset() + 60) * 60
      var theSeconds =
        jsdate.getHours() * 3600 +
        jsdate.getMinutes() * 60 +
        jsdate.getSeconds() +
        off
      var beat = Math.floor(theSeconds / 86.4)
      if (beat > 1000) beat -= 1000
      if (beat < 0) beat += 1000
      if (String(beat).length == 1) beat = '00' + beat
      if (String(beat).length == 2) beat = '0' + beat
      return beat
    },
    g: function() {
      return jsdate.getHours() % 12 || 12
    },
    G: function() {
      return jsdate.getHours()
    },
    h: function() {
      return pad(f.g(), 2)
    },
    H: function() {
      return pad(jsdate.getHours(), 2)
    },
    i: function() {
      return pad(jsdate.getMinutes(), 2)
    },
    s: function() {
      return pad(jsdate.getSeconds(), 2)
    },
    //u not supported yet

    // Timezone
    //e not supported yet
    //I not supported yet
    O: function() {
      var t = pad(Math.abs((jsdate.getTimezoneOffset() / 60) * 100), 4)
      if (jsdate.getTimezoneOffset() > 0) t = '-' + t
      else t = '+' + t
      return t
    },
    P: function() {
      var O = f.O()
      return O.substr(0, 3) + ':' + O.substr(3, 2)
    },
    //T not supported yet
    //Z not supported yet

    // Full Date/Time
    c: function() {
      return (
        f.Y() +
        '-' +
        f.m() +
        '-' +
        f.d() +
        'T' +
        f.h() +
        ':' +
        f.i() +
        ':' +
        f.s() +
        f.P()
      )
    },
    //r not supported yet
    U: function() {
      return Math.round(jsdate.getTime() / 1000)
    }
  }

  return format.replace(/[\\]?([a-zA-Z])/g, function(t, s) {
    var ret
    if (t != s) {
      // escaped
      ret = s
    } else if (f[s]) {
      // a date function exists
      ret = f[s]()
    } else {
      // nothing special
      ret = s
    }
    return ret
  })
}

// 日期格式化  time:毫秒值
export function formatDate(time) {
  var datetime = new Date(time)
  var year = datetime.getFullYear(),
    month = ('0' + (datetime.getMonth() + 1)).slice(-2),
    date = ('0' + datetime.getDate()).slice(-2),
    hour = ('0' + datetime.getHours()).slice(-2),
    minute = ('0' + datetime.getMinutes()).slice(-2),
    second = ('0' + datetime.getSeconds()).slice(-2)
  // 拼接
  var result =
    year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second
  // 返回
  return result
}

//获得地址栏参数
export function GetQueryString(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  var r = window.location.search.substr(1).match(reg)
  if (r != null) return decodeURI(r[2])
  return null
}

//guomai gene 报告字符串转数组
export function switch2(s) {
  if (typeof s != 'string') {
    return []
  }
  var tab = ['&^&', '&%&']
  s = s.replace(/;;;;/g, tab[0])
  s = s.replace(/;;;/g, tab[1])
  var arr = s.split(';;')
  for (var i = 0; i < arr.length; i++) {
    var k = arr[i].split(tab[1])
    if (k.length > 1) {
      arr[i] = k
      for (var j = 0; j < arr[i].length; j++) {
        var l = arr[i][j].split(tab[0])
        if (l.length > 1) {
          arr[i][j] = l
        }
      }
    } else {
      var l = arr[i].split(tab[0])
      if (l.length > 1) {
        arr[i] = []
        arr[i][0] = l
      } else {
        arr[i] = l[0]
      }
    }
  }
  return arr
}

/**
 * * * * * *
 * 验证相关 *
 * * * * * *
 */
//判断是否为手机号
export function isPoneAvailable(str) {
  var myreg = /^[1][3,4,5,7,8][0-9]{9}$/
  if (!myreg.test(str)) {
    return false
  } else {
    return true
  }
}
// 澳门身份证验证
export function macaoDecision(idCard) {
  const id = /[157][0-9]{6}\([0-9]\)/
  return id.test(idCard)
}

// 台湾身份证验证  F128984023
export function taiwanDecision(idCard) {
  const id = /^[a-zA-Z][0-9]{9}$/
  return id.test(idCard)
}

// 军官证验证
export function soldierDecision(idCard) {
  const id = /^[a-zA-Z0-9]{7,21}$/
  return id.test(idCard)
}

// 验证护照号码
export function passportDecision(idCard) {
  const id = /^((1[45]\d{7})|(G\d{8})|(P\d{7})|(S\d{7,8}))?$/
  return id.test(idCard)
}

// 验证姓名
export function nameDecision(name) {
  const username = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/
  return username.test(name)
}

/**
 * * * * * *
 * 精度相关 *
 * * * * * *
 */

export function multiple(arg1, arg2) {
  return (Math.round(arg1 * 100) * Math.round(arg2 * 100)) / 10000
}

//对多位小数进行四舍五入
//num是要处理的数字  v为要保留的小数位数
export function decimal(num, v) {
  var vv = Math.pow(10, v)
  return toNonExponential(Math.round(num * vv) / vv)
}

/**
 * 乘法运算，避免数据相乘小数点后产生多位数和计算精度损失。
 *
 * @param num1被乘数 | num2乘数
 */
export function numMulti(num1, num2) {
  var baseNum = 0
  try {
    baseNum += num1.toString().split('.')[1].length
  } catch (e) {}
  try {
    baseNum += num2.toString().split('.')[1].length
  } catch (e) {}
  return (
    (Number(num1.toString().replace('.', '')) *
      Number(num2.toString().replace('.', ''))) /
    Math.pow(10, baseNum)
  )
}

/**
 * 兼容低版本内核Math.log10，精度有偏差
 *
 */
if (Math.log10 == undefined) {
  Math.log10 = function(x) {
    return Math.log(x) / Math.log(10)
  }
}

/**
 *
 * 科学计数法转换为正常数值
 */
export function toNonExponential(num) {
  var m = num.toExponential().match(/\d(?:\.(\d*))?e([+-]\d+)/)
  return num.toFixed(Math.max(0, (m[1] || '').length - m[2]))
}


/**
 * * * * * *
 * 设备相关 *
 * * * * * *
 */

// 获取设备系统
export function detectOS() {
  var ua = navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == "micromessenger") {
      //在微信中打开
      return "weixin"
  } else if (ua.match(/Android/i) == "android") {
      return "Android"
  } else if (/(iPhone|iPad|iPod)/i.test(ua)) {
      return "IOS"
  } else {
      return ua
  }

}

/**
 *
 * 自己封装的对象
 */
export function lzlClass(name) {
  var self = this
  this.name = '刘' + name
  this.success = function(sunccessFunc) {
    //执行 参数形函数 并传参
    sunccessFunc('a')
    // 异步 否则self.failFunc未创建
    setTimeout(function() {
      self.failFunc('b')
    }, 0)

    return this
  }
  this.fail = function(failFunc) {
    self.failFunc = failFunc
    // failFunc('b')
    return this
  }
}
