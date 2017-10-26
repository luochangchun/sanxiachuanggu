import axios from 'axios'
const baseUrl='http://192.168.11.222:8080/servant/pub';
axios.defaults.baseURL = 'http://192.168.11.222:8080/servant/pub';
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
export function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  console.info(cname + "=" + cvalue + "; " + expires);
  document.cookie = cname + "=" + cvalue + "; " + expires;
  console.info(document.cookie);
}
//获取cookie
export function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
  }
  return "";
}
export function deleteCookie(name) {
  this.set(name, '', -1);
}
export function checkCookie() {
  var user = this.getCookie("nickname");
  if (user != "") {
    // alert("Welcome again " + user);
    self.$router.replace({ path: 'index' })
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
  }
  
}
