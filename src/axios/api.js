import axios from 'axios'
const baseUrl='http://192.168.11.222:8080/servant';
axios.defaults.baseURL = 'http://192.168.11.222:8080/servant';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 请求拦截器
axios.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})
// 响应拦截器
axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})

// 封装axios的get请求
export function toGet (url) {
  const newUrl=baseUrl+url
  return new Promise((resolve) => {
    axios.get(newUrl)
      .then(response => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
// 封装axios的post请求
export function fetch (url, params) {
  const newUrl=baseUrl+url
  return new Promise((resolve, reject) => {
    axios.post(newUrl, params)
      .then(response => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
};

//设置cookie
export function setCookie(name, value, days) {
  var d = new Date;
  d.setTime(d.getTime() + days);
  window.document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
}
//获取cookie
export function getCookie(name) {
  var v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
}
export function deleteCookie(name) {
  this.set(name, '', -1);
}
export function checkCookie() {
  let user = getCookie("userInfo");
  let data = JSON.parse(user);
  if (user != "") {
    // alert("Welcome again " + user);
    // self.$router.replace({ path: 'index' })
    window.localStorage.setItem("nickname",data['data']['nickname']);
  } else {
    // user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      this.setCookie("nickname", user, 365);
    }
  }
}

export default {
  Get (url) {
    return toGet(url)
  },
  Post (url, params) {
    return fetch(url, params)
  },
  SetCookie(cname, cvalue, exdays) {
    return setCookie(cname, cvalue, exdays)
  },
  GetCookie(name) {
    return getCookie(name)
  },
  CheckCookie() {
    return checkCookie()
  }
  
}
