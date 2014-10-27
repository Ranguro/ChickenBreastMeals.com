'use strict';

module.exports = function(app) {
	app.factory('mealsServer', function($http) {

		var errFunc = function(data,status) {
			console.log("error!");
			console.log(data);
			console.log(status);
		};

		var meal = {
			index: function() {
				var promise = $http({
					method:'GET',
					url: '/db'
				})
				.error(function(data,status){
					errFunc(data,status);
				});
				return promise;
			},

			saveNewMeal: function(meal) {
				console.log("meal name in meals-server.js is " + meal.name);
				var promise = $http.post('/db', meal)
					.error(function(data,status){
						errFunc(data,status);
				});
				return promise;
			},

			saveOldMeal: function(meal) {
				console.log("meal name in meals-server.js is " + meal.name);
				console.log("meal._id is: " + meal._id);
				var promise = $http.put('/db/' + meal._id, meal)
					.error(function(data,status){
						errFunc(data,status);
				});
				return promise;
			},

			deleteMeal: function(meal) {
				console.log("deleting meal in meals-server.js " + meal.name);
				console.log("meal._id is: " + meal._id);
				var promise = $http.delete('/db/' + meal._id)
				.error(function(data,status){
					errFunc(data,status);
				});
				return promise;
			},
		};

		return meal;

	});
};