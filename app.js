'use strict';

var index = angular.module('index', ['ngRoute', 'ngResource', 'ngCookies', 'infinite-scroll', 'publicModule']).config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/index', {
            templateUrl: 'app/index.html',
            // controller: 'indexController'
        })

        .otherwise({redirectTo: '/index'});

}])
index.filter('htmlize', ['$sce', function ($sce) {
    return function (val) {
        return $sce.trustAsHtml(val);
    };
}]);
index.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('myHttpInterceptor');
    $httpProvider.defaults.withCredentials = false;
}]);

angular
    .module('publicModule', [])
    .service('UserService', function ($cookies, $q) {
        var getUserInfo = function () {
            var userInfo = $cookies.getObject('userInfo');
            if (userInfo) {
                return userInfo;
            } else {
                return false;
            }
        };

        var checkLogin = function () {
            var userInfo = $cookies.getObject('userInfo');
            if (userInfo) {
                return userInfo;
            } else {
                // window.localStorage.setItem("fromPageNeedLogin", 1);
                window.location.href = "../wap/#/login";
                return false;
            }
        };

        var saveUserInfoInCookie = function (userInfo) {
            var expireDate = new Date();
            expireDate.setDate(expireDate.getDate() + 1);
            $cookies.putObject('userInfo', userInfo, {expires: expireDate, path: '/'});
        };

        var deleteUserInfoInCookie = function (userInfo) {
            var expireDate = new Date();
            expireDate.setDate(expireDate.getDate() - 10000);
            $cookies.putObject('userInfo', userInfo, {expires: expireDate, path: '/'});
        };

        return {
            getUserInfo: getUserInfo,
            checkLogin: checkLogin,
            saveUserInfoInCookie: saveUserInfoInCookie,
            deleteUserInfoInCookie: deleteUserInfoInCookie
        }
    })
    .service('ApiService', function ($q, $http) {
        var call = function (address, data, method, cache) {
            var deferred = $q.defer();
            var config = {
                method: method,
                url: baseUrl + address,
                data: data
            };
            if (cache == true) {
                config.cache = true;
            }
            if (method == "POST") {
                config.headers = {'Content-Type': 'application/x-www-form-urlencoded'};
            }
            $http(config).then(function (response) {
                // console.log(response);
                if (response.status == 200) {
                    deferred.resolve(response.data);
                } else {
                    deferred.reject(response.data);
                }
            }, function (response) {
                //deferred.reject("网络错误");
                deferred.reject(response.data);
            });

            return deferred.promise;
        };

        return {call: call};
    })
    .factory('myHttpInterceptor', function () {
        return {
            'request': function (config) {
                if ($('#loadings').size() > 0) {
                    $('#loadings').show();
                } else {
                    $('body').append('<div class="loadings" id="loadings"></div>');
                }
                //accessToken
                // console.log(config);
                var tokenData = JSON.parse(window.localStorage.getItem('accesstoken'));
                // console.log(tokenData);
                if (typeof(config.params) == "undefined") {
                    config.params = {};
                }
                if (tokenData) {
                    config.params.accesstoken = tokenData.accesstoken;
                }
                // console.log(config);
                return config;
            },

            'requestError': function (rejection) {
                $('#loadings').hide();
                return rejection;
            },

            'response': function (response) {
                $('#loadings').hide();
                if (response["data"]["status"] == 403) {
                    window.location.href = "../wap/#/login/";
                }
                return response;
            },

            'responseError': function (rejection) {
                $('#loadings').hide();
                console.log("rejection", rejection);
                if (rejection.status == 403) {//跨域时和非跨域时的statusCode
                    // var accessTokenManager = new AccessTokenManager(accessTokenConfig.clientId, accessTokenConfig.clientSecret);
                    // accessTokenManager.cleanCache();
                    $('.weui_dialog_alert').hide();
                    //alert("身份认证已过期,请重新登录。");
                    if (angular.isUndefined(rejection.data) || rejection.data == null) {
                        rejection.data = {
                            result: "身份认证已过期,请重新登录。"
                        };
                    } else {
                        if (angular.isDefined(rejection.data.error)) {
                            //rejection.data.result = rejection.data.error_description;
                            rejection.data.result = "身份认证已过期,请重新登录。";
                        }
                    }
                    //window.location.href = loginUrl;
                    console.log("------", rejection);
                    return rejection;
                } else if (rejection.status == 423) {
                    if (angular.isUndefined(rejection.data) || rejection.data == null) {
                        rejection.data = {
                            result: "请求过于频繁请稍后。"
                        };
                    } else {
                        rejection.data = {};
                        if (angular.isDefined(rejection.data.error)) {
                            //rejection.data.result = rejection.data.error_description;
                            rejection.data.message = "请求过于频繁请稍后。";
                        } else {
                            rejection.data.message = "请求过于频繁请稍后";
                        }
                    }
                    return rejection;
                }

                if (typeof (rejection.data.message) == "undefined") {
                    rejection.data = {
                        result: "网络错误",
                        code: 403
                    }
                }
                return rejection;
            }
        };
    })
;

