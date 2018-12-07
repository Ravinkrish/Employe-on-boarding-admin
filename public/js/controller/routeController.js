singapp.controller('routeDetailCtrl', ['$scope','routeServices','$state', function($scope,routeServices,$state) {

$scope.getAllEmployeeDetails = function ()
             {
                      routeServices.getAllEmployeeDetails().then(function (res)
                      {
                         $scope.employeeList = res.data;
                      });
             };


$scope.sendEmail = function(){
$scope.employeeList.email


};



$scope.getAllEmployeeDetails();
}]);