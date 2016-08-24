app.service("MailService", function($http, $q) {
	
	this.send = function (object) {
		var defer = $q.defer();
		
		$http.post("./src/sendEmail.php", object).then(function(data) {
			defer.resolve(data);
		}, function(err) {
			defer.reject('Não foi possível enviar o e-mail, verifique se os dados estão corretos.<br />Caso contrário, entre em contato com alexandre@aledsz.com.br');
		});

		return defer.promise;
	};

});
