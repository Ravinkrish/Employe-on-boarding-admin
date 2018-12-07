singapp.controller("releaveCtrl", function ($scope,releaveService,$window,employeeService) {

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




       $scope.formvisible = false;
        $scope.tablevisible = true;
        $scope.showhide = function () {
            $scope.formvisible = $scope.formvisible ? false : true;
            $scope.tablevisible = $scope.tablevisible ? false : true;

        };
        $scope.form2visible = false;
        $scope.showhide2 = function () {
            $scope.form2visible = $scope.form2visible ? false : true;
            $scope.tablevisible = $scope.tablevisible ? false : true;
        };

$scope.mongoid;
$scope.discussionCall=function(mongoid)
{
$scope.mongoid=mongoid;
 $scope.showhide();
}

$scope.sendDiscussiondate=function(disdate)
{
$scope.mongoid;
releaveService.callEmployeeForDiscussion($scope.mongoid,disdate).then(function(result){
console.log(result.data);
});

}











$scope.empid;
$scope.releaveInfo={};
$scope.releaveApply=function()
{
$scope.releaveInfo.releaveInfoDate= new Date();
console.log($scope.releaveInfo);
$scope.releaveInfo.employeeid=$scope.empid;
releaveService.sendReleaveInfo($scope.releaveInfo).then(function(result){
console.log(result.data);
})
}

$scope.getEmployeeReleaveInfo=function()
{
releaveService.getEmployeeReleaveInfo().then(function(result){
console.log(result.data);
$scope.releaveObj=result.data;
})
}

$scope.releaveApprove=function(releaveinfo){
console.log(releaveinfo);

var releaveinfo={};
console.log($scope.mongoids);
console.log(releaveinfo);
var s=releaveService.getNoticeperiodDateSetting();
 console.log(s);
releaveinfo.releaveStartDate=s.releaveStartDate;
releaveinfo.releaveEndDate=s.releaveEndDate;

 releaveinfo.mongoid=$scope.mongoids;
   releaveService.releaveEmployeeApprove(releaveinfo).then(function(result){

    console.log(result.data)
    $scope.noticeInfo={}
    $scope.noticeInfo.releaveEndDate=releaveinfo.releaveEndDate;
    $scope.noticeInfo.releaveStartDate=releaveinfo.releaveStartDate;
    $scope.noticeInfo.employeeid=result.data.employeeid;

    employeeService.noticePeriodInfo( $scope.noticeInfo).then(function(result){
    console.log(result.data);
    })
    })
}
$scope.mongoids;
$scope.approveReleave=function(mongoid){

$scope.mongoids=mongoid;
$scope.showhide2();

}

$scope.changingDateValue=function(servdate){
console.log(servdate);
releaveService.dateNoticePeriodDateSetting(servdate);
}




function init()
{
 $scope.empid=$window.sessionStorage.getItem("SavedString");
 $scope.getEmployeeReleaveInfo();
}
init();
})
