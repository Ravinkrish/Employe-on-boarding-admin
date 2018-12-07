
    singapp.controller('loginController', ['$scope','$state', function($scope,$state) {
        $scope.loginpage=function(){
        $state.go('dashboard');
        }

  }]);
