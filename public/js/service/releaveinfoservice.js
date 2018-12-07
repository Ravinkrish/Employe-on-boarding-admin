singapp.factory("releaveService", function ($http) {

var noticePeriodDate={};
var sendReleaveInfo=function(releveData)
{
return $http.post('/releaveinfo',releveData);
}
var getEmployeeReleaveInfo=function()
{
return $http.get('/getreleaveinfo');
}
var callEmployeeForDiscussion=function(mongoid,date)
{
return $http.post('/setEmployeeDiscussionDate/'+mongoid+'/'+date);
}

var releaveEmployeeApprove=function(releaveinfo){

return $http.post('/approveEmployeeInfo/'+releaveinfo.releaveStartDate+'/'+releaveinfo.releaveEndDate+'/'+releaveinfo.mongoid)
}
var dateNoticePeriodDateSetting=function(servdate)
{
       Object.assign(noticePeriodDate,servdate);

}

var getNoticeperiodDateSetting=function()
{
return noticePeriodDate;
}

return{
sendReleaveInfo:sendReleaveInfo,
getEmployeeReleaveInfo:getEmployeeReleaveInfo,
callEmployeeForDiscussion:callEmployeeForDiscussion,
releaveEmployeeApprove:releaveEmployeeApprove,
dateNoticePeriodDateSetting:dateNoticePeriodDateSetting,
getNoticeperiodDateSetting:getNoticeperiodDateSetting
    }






})
