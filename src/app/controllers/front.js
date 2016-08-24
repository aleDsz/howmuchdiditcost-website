app.controller("FrontController", function ($rootScope, $scope, $http, MailService, $q) {
	$scope.main = function() {
		$scope.clearEmail();
	};

	$scope.clearEmail = function () {
		$rootScope.Contato = {
			Nome     : null,
			Email    : null,
			Mensagem : null
		};
	};

	$scope.sendEmail = function() {
		$('#enviarEmail').addClass('loading');
		
		setTimeout(function() {
			$q.all([ MailService.send($rootScope.Contato) ]).then(function () {
				$scope.clearEmail();
			}, function(err) {
				$('.message').transition('fade');
				$('.msg').html(err);
			});
		}, 2000);

		setTimeout(function() {
			$('#enviarEmail').removeClass('loading');
		}, 2000);
	};
});
