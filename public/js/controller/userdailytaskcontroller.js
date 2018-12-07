singapp.controller("userdailytaskCtrl",function($scope,userDailyTaskService) {

  $scope.exportAction = function (option) {
        switch (option) {
            case 'pdf':
                $scope.$broadcast('export-pdf', {});
                break;
            case 'excel':
                $scope.$broadcast('export-excel', {});
                break;
            case 'doc':
                $scope.$broadcast('export-doc', {});
                break;
            case 'csv':
                $scope.$broadcast('export-csv', {});
                break;
            default:
                console.log('no event caught');
        }
    };



var r = document.getElementById('result');

			 $scope.startConverting=function() {

				if('webkitSpeechRecognition' in window){
					var speechRecognizer = new webkitSpeechRecognition();
					speechRecognizer.continuous = true;
					speechRecognizer.interimResults = true;
					speechRecognizer.lang = 'en-IN';
					speechRecognizer.start();

					var finalTranscripts = '';

					speechRecognizer.onresult = function(event){
					        console.log("haiiiii");
						var interimTranscripts = '';
						for(var i = event.resultIndex; i < event.results.length; i++){
							var transcript = event.results[i][0].transcript;
							transcript.replace("\n", "<br>");
							if(event.results[i].isFinal){
								finalTranscripts += transcript;
							}else{
								interimTranscripts += transcript;
							}
						}
						r.innerHTML = finalTranscripts + '<span style="color:#999">' + interimTranscripts + '</span>';
					};
					speechRecognizer.onerror = function (event) {
					};
				}else{
					r.innerHTML = 'Your browser is not supported. If google chrome, please upgrade!';
				}
			}
$scope.dailytask=
{
userdailytask:'',
date:'',
Employee:'',
Employeeid:''

}

//$scope.saveUserDailyTask=function(dailytasks)
//{
//
//console.log(dailytasks)
//console.log(dailytasks.date);
// $scope.dailytask.userdailytask=r.innerText;
// $scope.dailytask.date=dailytasks.date;
//
// console.log(dailytasks)
//
//userDailyTaskService.saveDailyTask(dailytasks).then(function(res){
//console.log(res.data);
//})
//
//}

$scope.saveUserDailyTask=function(dailytask)
{
console.log(dailytask)
console.log($scope.dailytask.date);

//var momentDate = moment($scope.dailytask.date);

// $scope.dailytask.date=momentDate.toDate();
$scope.dailytask.userdailytask=r.innerText;
userDailyTaskService.saveDailyTask(dailytask).then(function(res){
console.log(res.data);
})

}


$scope.getDailyTaskOfTodayAndTomorrow=function()
{
userDailyTaskService.getDailyTaskOfTodayAndTomorrow().then(function(res){
$scope.dailyTaskArray=[];
$scope.dailyTaskArray=res.data;
console.log($scope.dailyTaskArray);
$scope.dailytask={};
})
}

$scope.getAllTheEmployeeDetails=function()
{
userDailyTaskService.getAllTheUserDailyTask().then(function(res){
$scope.userAllTheTask=[];
$scope.userAllTheTask=res.data;
console.log($scope.userAllTheTask);
})
}

$scope.settaskIdForDelete=function(mongodid)
{
userDailyTaskService.settaskIdForDelete(mongodid);
var mongoid=userDailyTaskService.gettaskIdForDelete();
$scope.deleteid=mongoid;
}

$scope.deleteTask=function(mongoid)
{

 userDailyTaskService.deleteUserDailyTaskByMongodid(mongoid).then(function(){
 $("#btnClose").click();
 console.log("deleted successfully");
 $scope.getAllTheEmployeeDetails();
 })

}

$scope.approveEmployeeDailyTask=function(mongodid)
{
userDailyTaskService.approveEmployeeDailyTaskByMongodid(mongodid).then(function(result){
console.log(result);
})
}

$scope.approveEmployeeDailyTaskByMongodid=function(mongodid)
{
userDailyTaskService.disapproveEmployeeDailyTaskByMongodid(mongodid).then(function(result){
console.log(result);
})
}




function init()
{
$scope.getDailyTaskOfTodayAndTomorrow();
$scope.getAllTheEmployeeDetails();
}
init();




});


singapp.controller('datepicker.controller', ['$scope', function ($scope) {

    $scope.today = moment().toDate();
    todaydate = new Date();
    console.log("todaydate", todaydate);

$scope.getdate=function(dateValue)
{
console.log(dateValue);
}






}]);

