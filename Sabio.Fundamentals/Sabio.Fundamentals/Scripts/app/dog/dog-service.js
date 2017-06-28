﻿(function () {
    "use strict";
    angular.module('mainApp')
         .factory('dogService', DogService);

    DogService.$inject = ['$http'];

    function DogService($http) {
        var sabioAuthKey = 'sabio-internal-00';
        var svc = {};

        // Public methods - All return a JavaScript promise
        svc.getAll = _getAll;
        svc.getById = _getById;
        svc.post = _post;
        svc.put = _put;
        svc.delete = _delete;

        // Begin "private" functions

        function _getAll() {
            var settings = {
                url: 'http://sabioapi2.azurewebsites.net/api/entities/dogs',
                method: 'GET',
                headers: { 'SABIO-AUTH': sabioAuthKey },
                xhrFields: { withCredentials: true },
                cache: false,
                responseType: 'json'
            };
            return $http(settings);
        }

        function _getById(id) {
            var settings = {
                url: 'http://sabioapi2.azurewebsites.net/api/entities/dogs/' + id,
                method: 'GET',
                headers: { 'SABIO-AUTH': sabioAuthKey },
                xhrFields: { withCredentials: true },
                cache: false,
                responseType: 'json'
            };
            return $http(settings);
        }

        function _post(blog) {
            var settings = {
                url: 'http://sabioapi2.azurewebsites.net/api/entities/dogs',
                method: 'POST',
                headers: { 'SABIO-AUTH': sabioAuthKey },
                xhrFields: { withCredentials: true },
                cache: false,
                contentType: 'application/json; charset=UTF-8',
                data: JSON.stringify(blog)
            };
            return $http(settings);
        }

        function _put(blog) {
            var settings = {
                url: 'http://sabioapi2.azurewebsites.net/api/entities/dogs/' + blog.id,
                method: 'PUT',
                headers: { 'SABIO-AUTH': sabioAuthKey },
                xhrFields: { withCredentials: true },
                cache: false,
                responseType: 'json',
                contentType: 'application/json; charset=UTF-8',
                data: JSON.stringify(blog)
            };
            return $http(settings);
        }

        function _delete(id) {
            var settings = {
                url: 'http://sabioapi2.azurewebsites.net/api/entities/dogs/' + blog.id,
                method: 'DELETE',
                headers: { 'SABIO-AUTH': sabioAuthKey },
                xhrFields: { withCredentials: true },
                cache: false,
                responseType: 'json'
            };
            return $http(settings);
        }

        return svc;
    }

})();