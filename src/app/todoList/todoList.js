var angular = require('angular');

	angular.module('app')
		.directive('todoList', function () {
			'use strict';
			return {
				restrict: 'E',
				transclude: true,
				scope: {},
				templateUrl: '/todoList/todoList.html',
				controller: todoListController,
			};
	});

	function todoListController($scope) {

		$scope.list = [
			{
				title: 'learn Angular 2+ and TypeScript',
				done: false
			},
			{
				title: 'make my application works!',
				done: false
			},
			{
				title: 'Complete the Presentation of Micro Project',
				done: false
			}
		];

		$scope.doneList = [
			{
				title: 'Complete the Micro Project PPT and Report',
				done: true
			}
		];

		$scope.addNewTask = function() {
			if ($scope.newTask.length !== 0) {
				var newTask = {title: $scope.newTask, done: false};
				$scope.list.push(newTask);
				clearNewTask();
			}
		}

		$scope.markTaskAsDone = function(index) {
			$scope.list[index].done = true;
			var doneTask = $scope.list[index];
			$scope.doneList.push(doneTask);
			$scope.list.splice(index, 1);
		}

		$scope.deleteTask = function(index) {
			$scope.list.splice(index, 1);
		}

		function clearNewTask() {
			$scope.newTask = '';
		}
	};
