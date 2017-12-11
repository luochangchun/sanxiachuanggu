webpackJsonp([1],{

/***/ "EWIa":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "HbB2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return USERINFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TITLE; });
/**
 * Created by superman on 17/2/16.
 * vuex types
 */

var LOGIN = 'login';

var USERINFO = 'userinfo';

var LOGOUT = 'logout';

var TITLE = 'title';

/***/ }),

/***/ "I+Ex":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "KheU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formatDate;
function formatDate(date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    }
    for (let k in o) {
        let str = o[k] + '';
        if (new RegExp(`(${k})`).test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
};

function padLeftZero(str) {
    return ('00' + str).substr(str.length);
}


/***/ }),

/***/ "M6Ix":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/12.d7cf207.jpg";

/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("7+uW");

// EXTERNAL MODULE: ./src/components/store/store.js
var store = __webpack_require__("Ynn5");

// EXTERNAL MODULE: ./node_modules/mint-ui/lib/mint-ui.common.js
var mint_ui_common = __webpack_require__("Au9i");
var mint_ui_common_default = /*#__PURE__*/__webpack_require__.n(mint_ui_common);

// EXTERNAL MODULE: ./src/api/api.js
var api = __webpack_require__("P9l9");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue
//
//
//
//
//
//

/* harmony default export */ var App = ({
  name: 'app'
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3c1ff255","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/App.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_App = (esExports);
// CONCATENATED MODULE: ./src/App.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  App,
  selectortype_template_index_0_src_App,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_App = (Component.exports);

// EXTERNAL MODULE: ./static/js/rem.js
var rem = __webpack_require__("kNAH");
var rem_default = /*#__PURE__*/__webpack_require__.n(rem);

// EXTERNAL MODULE: ./node_modules/mint-ui/lib/style.css
var style = __webpack_require__("d8/S");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: ./static/css/reset.css
var css_reset = __webpack_require__("EWIa");
var reset_default = /*#__PURE__*/__webpack_require__.n(css_reset);

// EXTERNAL MODULE: ./static/css/app.css
var app = __webpack_require__("uCtH");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: ./src/routes.js
var routes = __webpack_require__("eqvY");

// CONCATENATED MODULE: ./src/main.js










vue_esm["default"].use(mint_ui_common_default.a);

vue_esm["default"].config.productionTip = false;

/* eslint-disable no-new */
new vue_esm["default"]({
  el: '#app',
  router: routes["a" /* default */],
  Mint: mint_ui_common_default.a,
  api: api["a" /* default */],
  store: store["a" /* default */],
  template: '<App/>',
  components: { App: src_App }
});

/***/ }),

/***/ "P9l9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export toGet */
/* unused harmony export fetch */
/* unused harmony export put */
/* unused harmony export toDelete */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__("//Fk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_store_store__ = __webpack_require__("Ynn5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_store_types__ = __webpack_require__("HbB2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes_js__ = __webpack_require__("eqvY");





// axios 配置
// const baseUrl = 'http://192.168.11.222/servant';
var baseUrl = "http://www.sanxiachuanggu.com/servant";
__WEBPACK_IMPORTED_MODULE_1_axios___default.a.defaults.timeout = 5000;
__WEBPACK_IMPORTED_MODULE_1_axios___default.a.defaults.baseURL = baseUrl;
__WEBPACK_IMPORTED_MODULE_1_axios___default.a.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 请求拦截器
__WEBPACK_IMPORTED_MODULE_1_axios___default.a.interceptors.request.use(function (config) {
  if (__WEBPACK_IMPORTED_MODULE_2__components_store_store__["a" /* default */].state.token) {
    config.headers.Authorization = 'Bearer ' + __WEBPACK_IMPORTED_MODULE_2__components_store_store__["a" /* default */].state.token;
  }
  return config;
}, function (error) {
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(error);
});
/// http response 拦截器
__WEBPACK_IMPORTED_MODULE_1_axios___default.a.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response) {
    switch (error.response.status) {
      case 403:
        // 403 清除token信息并跳转到登录页面
        window.localStorage.clear();
        __WEBPACK_IMPORTED_MODULE_2__components_store_store__["a" /* default */].commit(__WEBPACK_IMPORTED_MODULE_3__components_store_types__["b" /* LOGOUT */]);
        __WEBPACK_IMPORTED_MODULE_4__routes_js__["a" /* default */].replace({
          path: '/login',
          query: { redirect: __WEBPACK_IMPORTED_MODULE_4__routes_js__["a" /* default */].currentRoute.fullPath }
        });
    }
  }
  // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(error.response.data);
});

// 封装axios的get请求
function toGet(url) {
  var newUrl = baseUrl + url;
  return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve) {
    __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get(newUrl).then(function (response) {
      resolve(response.data);
    }).catch(function (error) {
      reject(error);
    });
  });
}
// 封装axios的post请求
function fetch(url, params) {
  var newUrl = baseUrl + url;
  return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post(newUrl, params).then(function (response) {
      resolve(response.data);
    }).catch(function (error) {
      reject(error);
    });
  });
};

// put
function put(url, params) {
  var newUrl = baseUrl + url;
  return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    __WEBPACK_IMPORTED_MODULE_1_axios___default.a.put(newUrl, params).then(function (response) {
      resolve(response.data);
    }).catch(function (error) {
      reject(error);
    });
  });
};

function toDelete(url) {
  var newUrl = baseUrl + url;
  return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve) {
    __WEBPACK_IMPORTED_MODULE_1_axios___default.a.delete(newUrl).then(function (response) {
      resolve(response.data);
    }).catch(function (error) {
      reject(error);
    });
  });
}

/* harmony default export */ __webpack_exports__["a"] = ({
  axios: __WEBPACK_IMPORTED_MODULE_1_axios___default.a,
  Get: function Get(url) {
    return toGet(url);
  },
  Post: function Post(url, params) {
    return fetch(url, params);
  },
  Put: function Put(url, params) {
    return put(url, params);
  },
  Delete: function Delete(url, params) {
    return toDelete(url);
  }
});

/***/ }),

/***/ "WfhD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/api/api.js
var api = __webpack_require__("P9l9");

// EXTERNAL MODULE: ./static/js/date.js
var js_date = __webpack_require__("KheU");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/activityList.vue
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var activityList = ({
  data: function data() {
    return {
      active: 0,
      activtyData: "",
      totalPages: "",
      list: [],
      last: "",
      page: 1,
      loading: false
    };
  },
  created: function created() {
    this.initActivity();
  },

  filters: {
    formatDate: function formatDate(time) {
      var date = new Date(time);
      return Object(js_date["a" /* formatDate */])(date, 'yyyy-MM-dd');
    }
  },
  methods: {
    initActivity: function initActivity() {
      var _this = this;

      var url = "/activity/1/" + "6" + "/" + this.page;
      api["a" /* default */].Get(url).then(function (res) {
        _this.activtyData = res["data"];
        _this.totalPages = res["totalPages"];
        for (var i = 0; i < _this.activtyData.length; i++) {
          _this.list.push(_this.activtyData[i]);
        }
        if (_this.totalPages > 1) {
          _this.page = 2;
        }
      });
      this.loading = false;
    },
    loadMore: function loadMore() {
      this.loading = true;
      if (this.page <= this.totalPages) {
        this.initActivity(this.page);
      } else {
        return false;
      }
      this.loading = false;
      this.page++;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5ba32338","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/activityList.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:(_vm.loadMore),expression:"loadMore"}],staticClass:"activityList",attrs:{"infinite-scroll-immediate-check":"false","infinite-scroll-disabled":"loading","infinite-scroll-distance":"10"}},_vm._l((_vm.list),function(item,index){return _c('router-link',{key:index,staticClass:"item",attrs:{"to":{ name: 'article', params: { id: item.id}}}},[_c('img',{staticClass:"item_img",attrs:{"src":item.icon,"alt":""}}),_vm._v(" "),_c('div',{staticClass:"item_word"},[_c('h1',{staticClass:"text-ellipsis-muti text-ellipsis-1"},[_vm._v(_vm._s(item['name']))]),_vm._v(" "),_c('p',{staticClass:"text-ellipsis-muti text-ellipsis-1"},[_vm._v("时间："+_vm._s(item['location']))]),_vm._v(" "),_c('p',[_vm._v("地点："+_vm._s(_vm._f("formatDate")(item['startAt'])))])])])}))}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_activityList = (esExports);
// CONCATENATED MODULE: ./src/components/activityList.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  activityList,
  components_activityList,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_activityList = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "Wkgs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/mint-ui/lib/mint-ui.common.js
var mint_ui_common = __webpack_require__("Au9i");
var mint_ui_common_default = /*#__PURE__*/__webpack_require__.n(mint_ui_common);

// EXTERNAL MODULE: ./src/api/api.js
var api = __webpack_require__("P9l9");

// EXTERNAL MODULE: ./static/js/date.js
var js_date = __webpack_require__("KheU");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/reply.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var reply = ({
  data: function data() {
    return {
      list: "",
      question: "", //主题
      reply: "", //对话
      flag: false,
      form: {
        content: "",
        flag: false
      }
    };
  },
  created: function created() {
    var id = this.$route.params.id;
    this.initDetail(id);
  },

  filters: {
    formatDate: function formatDate(time) {
      var date = new Date(time);
      return Object(js_date["a" /* formatDate */])(date, "yyyy-MM-dd hh:mm");
    }
  },
  methods: {
    initDetail: function initDetail(id) {
      var _this = this;

      api["a" /* default */].Get("/indie/question/" + id).then(function (res) {
        if (res["question"] == null) {
          _this.flag = true;
        } else {
          _this.question = res["question"];
          _this.reply = res["reply"];
          _this.flag = false;
        }
      });
    },
    vailEmpty: function vailEmpty(val) {
      if (val) {
        if (val === "") {
          this.form.flag = true;
        } else {
          this.form.flag = false;
        }
      } else {
        this.form.flag = true;
      }
    },
    submitForm: function submitForm() {
      var _this2 = this;

      var params = {
        subjectId: this.$route.params.id,
        content: this.form.content
      };
      api["a" /* default */].Post("/indie/reply", params).then(function (res) {
        if (res["suc"] == true) {
          Object(mint_ui_common["Toast"])({
            message: "回复成功",
            duration: 500
          });
          var id = _this2.$route.params.id;
          _this2.initDetail(id);
        } else {
          Object(mint_ui_common["Toast"])({
            message: "回复失败",
            duration: 500
          });
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0e48f9a2","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/reply.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticStyle:{"min-height":"calc(100vh - 2.2rem)"}},[(!_vm.flag)?_c('div',{staticClass:"main_login"},[_c('h1',[_vm._v(_vm._s(_vm.question['content']))]),_vm._v(" "),_c('p',{staticClass:"last_p"},[_c('span',[_vm._v(_vm._s(_vm.question['name']))]),_vm._v(_vm._s(_vm._f("formatDate")(_vm.question['createAt'])))])]):_vm._e(),_vm._v(" "),_c('span',{staticStyle:{"background":"linear-gradient(#efefef, #e0e0e0)","width":"100%","height":"0.5rem","display":"block"}}),_vm._v(" "),_c('div',{staticClass:"main_login"},[_vm._m(0,false,false),_vm._v(" "),_c('p',{directives:[{name:"show",rawName:"v-show",value:(_vm.reply.length == 0),expression:"reply.length == 0"}]},[_vm._v("暂未交流记录")]),_vm._v(" "),_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.reply.length != 0),expression:"reply.length != 0"}]},_vm._l((_vm.reply),function(item,index){return _c('li',{key:index},[_c('p',{staticClass:"last_p"},[_c('span',{class:{ blue: item['mentor']}},[_vm._v(_vm._s(item['name']))]),_vm._v(_vm._s(_vm._f("formatDate")(item['createAt'])))]),_vm._v(" "),_c('p',{staticClass:"border-b"},[_vm._v(_vm._s(item['content']))])])}))])]),_vm._v(" "),_c('div',{staticClass:"footer",staticStyle:{"background-color":"#fff"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.content),expression:"form.content"}],attrs:{"type":"text","placeholder":"我来回复"},domProps:{"value":(_vm.form.content)},on:{"blur":function($event){_vm.vailEmpty(_vm.form.content)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.form, "content", $event.target.value)}}}),_vm._v(" "),_c('button',{on:{"click":_vm.submitForm}},[_vm._v("回复")])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',[_c('span',[_vm._v("|")]),_vm._v("相关交流")])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_reply = (esExports);
// CONCATENATED MODULE: ./src/components/reply.vue
function injectStyle (ssrContext) {
  __webpack_require__("rWax")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0e48f9a2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  reply,
  components_reply,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_reply = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "Xt6H":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/api/api.js
var api = __webpack_require__("P9l9");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/article.vue
//
//
//
//
//



/* harmony default export */ var article = ({
  data: function data() {
    return {
      article: "",
      content: ""
    };
  },
  created: function created() {
    var id = this.$route.params.id;
    this.initArticle(id);
  },

  methods: {
    initArticle: function initArticle(id) {
      var _this = this;

      api["a" /* default */].Get("/article/" + id).then(function (res) {
        if (!res["content"]) {
          _this.content = "暂无数据";
        } else {
          _this.content = res["content"];
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-02eaf4e6","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/article.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{domProps:{"innerHTML":_vm._s(_vm.content)}})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_article = (esExports);
// CONCATENATED MODULE: ./src/components/article.vue
function injectStyle (ssrContext) {
  __webpack_require__("I+Ex")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  article,
  components_article,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_article = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "Ynn5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__("bOdI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("NYxO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__types__ = __webpack_require__("HbB2");


var _mutations;

/**
 * Created by superman on 17/2/16.
 */




__WEBPACK_IMPORTED_MODULE_2_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
    state: {
        user: '',
        userinfo: '',
        token: null,
        title: ''
    },
    mutations: (_mutations = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_3__types__["a" /* LOGIN */], function (state, data) {
        localStorage.token = data;
        state.token = data;
    }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_3__types__["d" /* USERINFO */], function (state, data) {
        localStorage.userinfo = data;
        state.userinfo = data;
    }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_3__types__["b" /* LOGOUT */], function (state) {
        localStorage.removeItem('token');
        localStorage.removeItem('userinfo');
        state.token = null;
        state.userinfo = null;
    }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_3__types__["c" /* TITLE */], function (state, data) {
        state.title = data;
    }), _mutations)
}));

/***/ }),

/***/ "ZBJ4":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "d8/S":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "dAjm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/json/stringify.js
var stringify = __webpack_require__("mvHQ");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: ./src/components/store/types.js
var types = __webpack_require__("HbB2");

// EXTERNAL MODULE: ./src/api/api.js
var api = __webpack_require__("P9l9");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/index.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var components = ({
  data: function data() {
    return {
      token: '',
      loginForm: {
        phone: "",
        pass: "",
        phoneFlag: false,
        passFlag: false
      }
    };
  },
  mounted: function mounted() {
    this.$store.commit(types["c" /* TITLE */], 'Login');
    this.$store.commit(types["c" /* TITLE */], 'userinfo');
  },

  methods: {
    vailPhone: function vailPhone(val) {
      var re = /^1[34578]\d{9}$/;
      if (val) {
        if (val === "" || !re.test(val) || val.length < 11) {
          this.loginForm.phoneFlag = true;
        } else {
          this.loginForm.phoneFlag = false;
        }
      } else {
        this.loginForm.phoneFlag = true;
      }
    },
    vailPass: function vailPass(val) {
      var re = /^[A-Za-z0-9\!\@\#\$\%\^\&\*\(\)\_\+\`\~\-\=\,\.\;\:\<\>\?\|]{6,16}$/;
      if (val) {
        if (val === "" || !re.test(val) || val.length < 6 || val.length > 16) {
          this.loginForm.passFlag = true;
        } else {
          this.loginForm.passFlag = false;
        }
      } else {
        this.loginForm.passFlag = true;
      }
    },
    submitForm: function submitForm() {
      var _this = this;

      var params = {
        "phone": this.loginForm.phone,
        "password": this.loginForm.pass
      };
      api["a" /* default */].Post('/pub/sign/in', params).then(function (res) {
        if (res['suc'] == true) {
          _this.loginForm.phoneFlag = false;
          _this.loginForm.passFlag = false;
          var Authorization = res['msg']; //存取授权值
          var UserInfo = stringify_default()(res); //存取用户信息
          if (Authorization) {
            _this.$store.commit(types["a" /* LOGIN */], Authorization);
            _this.$store.commit(types["d" /* USERINFO */], UserInfo);
            api["a" /* default */].Get('/wc/auth', params).then(function (res) {
              console.log(res);
            });
          }
        } else if (res['suc'] == false) {
          alert(res['msg']);
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4fc84178","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._m(0,false,false),_vm._v(" "),_c('div',{staticClass:"sh-login-main"},[_c('div',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.loginForm.phone),expression:"loginForm.phone"}],staticClass:"s1",attrs:{"type":"text","placeholder":"输入手机号"},domProps:{"value":(_vm.loginForm.phone)},on:{"blur":function($event){_vm.vailPhone(_vm.loginForm.phone)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.loginForm, "phone", $event.target.value)}}}),_vm._v(" "),_c('p',{class:_vm.loginForm.phoneFlag ? 'true' : 'false'},[_vm._v("* 请输入正确手机号!")])]),_vm._v(" "),_c('div',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.loginForm.pass),expression:"loginForm.pass"}],staticClass:"s2",attrs:{"type":"password","placeholder":"输入账号密码"},domProps:{"value":(_vm.loginForm.pass)},on:{"blur":function($event){_vm.vailPass(_vm.loginForm.pass)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.loginForm, "pass", $event.target.value)}}}),_vm._v(" "),_c('p',{class:_vm.loginForm.passFlag ? 'true' : 'false'},[_vm._v("* 请输入正确密码!")])]),_vm._v(" "),_c('button',{staticClass:"button",on:{"click":_vm.submitForm}},[_vm._v("登录")])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"login_img"},[_c('img',{attrs:{"src":__webpack_require__("ZBJ4"),"alt":""}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_components = (esExports);
// CONCATENATED MODULE: ./src/components/index.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  components,
  selectortype_template_index_0_src_components,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "eqvY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("/ocq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_components_store_store__ = __webpack_require__("Ynn5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_components_store_types__ = __webpack_require__("HbB2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_components_index_vue__ = __webpack_require__("dAjm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_components_reply_vue__ = __webpack_require__("Wkgs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_components_newsList_vue__ = __webpack_require__("kGiK");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_components_activityList_vue__ = __webpack_require__("WfhD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_components_article_vue__ = __webpack_require__("Xt6H");




 //绑定页面
 //问题回复页面



__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

var routes = [{ path: '/index', name: 'index', component: __WEBPACK_IMPORTED_MODULE_4__src_components_index_vue__["a" /* default */] }, { path: '/Reply/:id', name: 'Reply', component: __WEBPACK_IMPORTED_MODULE_5__src_components_reply_vue__["a" /* default */] }, { path: '/NewsList', name: 'NewsList', component: __WEBPACK_IMPORTED_MODULE_6__src_components_newsList_vue__["a" /* default */] }, { path: '/activityList', name: 'activityList', component: __WEBPACK_IMPORTED_MODULE_7__src_components_activityList_vue__["a" /* default */] }, { path: '/article/:id', name: 'article', component: __WEBPACK_IMPORTED_MODULE_8__src_components_article_vue__["a" /* default */] }, { path: '*', redirect: '/index' }];

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
  __WEBPACK_IMPORTED_MODULE_2__src_components_store_store__["a" /* default */].commit(__WEBPACK_IMPORTED_MODULE_3__src_components_store_types__["a" /* LOGIN */], window.localStorage.getItem('token'));
}
if (window.localStorage.getItem('userinfo')) {
  __WEBPACK_IMPORTED_MODULE_2__src_components_store_store__["a" /* default */].commit(__WEBPACK_IMPORTED_MODULE_3__src_components_store_types__["d" /* USERINFO */], window.localStorage.getItem('userinfo'));
}
var router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  linkActiveClass: 'active',
  mode: 'hash',
  base: __dirname,
  routes: routes
});
router.beforeEach(function (to, from, next) {
  if (to.matched.some(function (r) {
    return r.meta.requireAuth;
  })) {
    if (__WEBPACK_IMPORTED_MODULE_2__src_components_store_store__["a" /* default */].state.token) {
      window.scrollTo(0, 0);
      next();
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    }
  } else {
    window.scrollTo(0, 0);
    next();
  }
});
/* harmony default export */ __webpack_exports__["a"] = (router);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "/"))

/***/ }),

/***/ "kGiK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/api/api.js
var api = __webpack_require__("P9l9");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/newsList.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var newsList = ({
  data: function data() {
    return {
      active: 0,
      category: "", //分类
      newsListData: "",
      totalPages: "",
      noFlag: false,
      list: [],
      last: "",
      page: 1,
      loading: false
    };
  },

  watch: {
    active: function active(val, oldVal) {
      // 这里就可以通过 val 的值变更来确定
      this.active = val;
      window.localStorage.setItem("active", val);
      this.list = []; //list清空
      this.page = 1;
      this.totalPages = 1;
      this.loading = false;
      this.loadMore(val);
    }
  },
  created: function created() {
    this.initView();
  },

  methods: {
    initView: function initView() {
      var winHeight = 0;
      if (window.innerHeight) {
        winHeight = window.innerHeight;
      } else if (document.body && document.body.clientHeight) {
        winHeight = document.body.clientHeight;
      }
      // let newsList = document.getElementById('newsList');
      this.newApi();
    },
    newApi: function newApi() {
      var _this = this;

      //获取新闻列表基本信息
      var url = "/pub/info/" + 10;
      api["a" /* default */].Get(url).then(function (res) {
        _this.category = res["category"];
        for (var i = 0; i < _this.category.length; i++) {
          if (i == 0) {
            _this.active = _this.category[i].id;
          }
        }
      });
    },
    loadMore: function loadMore() {
      var _this2 = this;

      console.log("page  " + this.page + "   totalPages" + this.totalPages);
      this.loading = true;
      if (this.page <= this.totalPages) {
        // this.initNewsList(this.page);
        var active = window.localStorage.getItem("active");
        var url = "/pub/info/" + active + "/" + "6" + "/" + this.page;
        api["a" /* default */].Get(url).then(function (res) {
          _this2.newsListData = res["data"];
          _this2.totalPages = res["totalPages"];
          for (var i = 0; i < _this2.newsListData.length; i++) {
            _this2.list.push(_this2.newsListData[i]);
          }
        });
      } else {
        return false;
      }
      this.loading = false;
      this.page++;
    }
  },
  filters: {
    beforeFour: function beforeFour(value) {
      if (!value) return '';
      value = value.toString();
      return value.substr(0, 4);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-b2578e42","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/newsList.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"newsList"}},[_vm._m(0,false,false),_vm._v(" "),_c('div',{staticClass:"news_list",attrs:{"id":"news_list"}},[_c('mt-navbar',{staticClass:"new",model:{value:(_vm.active),callback:function ($$v) {_vm.active=$$v},expression:"active"}},_vm._l((_vm.category),function(item,index){return _c('mt-tab-item',{key:index,attrs:{"id":item.id}},[_vm._v(_vm._s(_vm._f("beforeFour")(item['name'])))])})),_vm._v(" "),_c('mt-tab-container',{model:{value:(_vm.active),callback:function ($$v) {_vm.active=$$v},expression:"active"}},_vm._l((_vm.category),function(item,index){return _c('mt-tab-container-item',{key:index,attrs:{"id":item.id}},[_c('div',{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:(_vm.loadMore),expression:"loadMore"}],attrs:{"infinite-scroll-immediate-check":"true","infinite-scroll-disabled":"loading","infinite-scroll-distance":"10"}},_vm._l((_vm.list),function(item,index){return _c('router-link',{key:index,staticClass:"item",attrs:{"to":{ name: 'article', params: { id: item.id}}}},[_c('img',{staticClass:"item_img",attrs:{"src":item.icon,"alt":""}}),_vm._v(" "),_c('div',{staticClass:"item_word"},[_c('h1',{staticClass:"text-ellipsis-muti text-ellipsis-2"},[_vm._v(_vm._s(item['title']))])])])}))])}))],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"new_img_banner",attrs:{"id":"new_img_banner"}},[_c('img',{attrs:{"src":__webpack_require__("M6Ix"),"alt":""}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_newsList = (esExports);
// CONCATENATED MODULE: ./src/components/newsList.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  newsList,
  components_newsList,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_newsList = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "kNAH":
/***/ (function(module, exports) {

var fz;
(function(doc, win) {
    if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
        handleFontSize();
    } else {
        if (document.addEventListener) {

            document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);

        } else if (document.attachEvent) {

            document.attachEvent("WeixinJSBridgeReady", handleFontSize);

            document.attachEvent("onWeixinJSBridgeReady", handleFontSize);

        }

    }
    function handleFontSize() {
        // 设置网页字体为默认大小
        WeixinJSBridge.invoke('setFontSizeCallback', {
            'fontSize': fz
        });
        // 重写设置网页字体大小的事件
        WeixinJSBridge.on('menu:setfont', function () {
            WeixinJSBridge.invoke('setFontSizeCallback', {
                'fontSize': fz
            });
        });
    }

    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
            fz = parseInt(docEl.style.fontSize);
            return fz;
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);

    recalc();
})(document, window);





/***/ }),

/***/ "rWax":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "uCtH":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.862b5e69676badc58552.js.map