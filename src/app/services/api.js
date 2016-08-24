app.service("ApiService", function($http, $q) {

	this.addApiKey = function(route, apiKey) {
		return route + "?api_key=" + apiKey;
	};

	this.post = function(obj, route, apiKey) {
		var deferred = $q.defer();
		
		$http.post(addApiKey(route, apiKey), obj).then(function(data) {
			deferred.resolve(data);
		}, function(err) {
			deferred.reject(err);
		});

		return deferred.promise();
	};

	this.get = function(obj, route, apiKey) {
		var deferred = $q.defer();
		
		$http.get(addApiKey(route, apiKey), obj).then(function(data) {
			deferred.resolve(data);
		}, function(err) {
			deferred.reject(err);
		});

		return deferred.promise();
	};

	this.put = function(obj, route, apiKey) {
		var deferred = $q.defer();
		
		$http.put(addApiKey(route, apiKey), obj).then(function(data) {
			deferred.resolve(data);
		}, function(err) {
			deferred.reject(err);
		});

		return deferred.promise();
	};

	this.delete = function(obj, route, apiKey) {
		var deferred = $q.defer();
		
		$http.delete(addApiKey(route, apiKey), obj).then(function(data) {
			deferred.resolve(data);
		}, function(err) {
			deferred.reject(err);
		});

		return deferred.promise();
	};
});
