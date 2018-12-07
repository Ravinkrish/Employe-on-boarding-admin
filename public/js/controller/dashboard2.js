singapp.controller("dashboardCtrl", function ($scope,projectService) {


$scope.projectStatus=function()
{

var Activearray=projectService.getfirstMonthArrayvalue();
var Inactivearray=projectService.getsecMonthArrayvalue();
var productionarray=projectService.getthirdMonthArrayvalue();
var maintanencearray=projectService.getfourthMonthArrayvalue();
var slackarray=projectService.getfiveMonthArrayvalue();
//console.log(firstarray);
//$scope.secArray=projectService.getsecMonthArrayvalue();
 $scope.arrayvaluess=[
    {
            name: 'Slack',
            data:slackarray
     },
    {
            name: 'Maintanence',
            data:maintanencearray
     },
    {
        name: 'Production',
        data:productionarray
    }, {
        name: 'Inactive',
        data:Inactivearray
    },
       {
            name: 'Active',
            data:Activearray
        }];
//console.log($scope.firstarray);
Highcharts.chart('projectStatus', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'PROJECT STATUS IN A YEAR'
    },
    xAxis: {
        categories: ['Jan', 'FEB', 'MAR', 'APRIL', 'MAY','Jun','JUL','AUG','SEP','OCT','NOV','DEC'],
         title: {
                    text: 'Months'
                    //align: 'center'
                }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'PROJECT STATUS'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
            }
        }
    },
    series:$scope.arrayvaluess
});
}

$scope.hoursSpentOnLiveProject=function()
{
//console.log(fullHoursData);
var yu=projectService.getHourOnLiveProject();
console.log(yu);
if(yu)
{
console.log(yu);
Highcharts.chart('LiveHours', {

    title: {
        text: 'HOURS SPEND ON THE LIVE PROJECT'
    },

    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },

    series: [{
        type: 'pie',
        allowPointSelect: true,
        keys: ['name', 'y', 'selected', 'sliced'],
        data:yu,
        showInLegend: true
    }]
});
}

}

$scope.hoursSpentOnMaintanceProject=function()
{
var mainhours=projectService.getHourOnMaintaProject();
Highcharts.chart('maintanenceHours', {

    title: {
        text: 'HOURS SPEND ON THE MAINTANENCE PROJECT'
    },

    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },

    series: [{
        type: 'pie',
        allowPointSelect: true,
        keys: ['name', 'y', 'selected', 'sliced'],
        data:mainhours,
        showInLegend: true
    }]
});

}

$scope.noOfPeopleInTheLiveProject=function()
{
var noofEmployee=projectService.getNoEmployeeInTheLiveProject();
console.log(noofEmployee);
Highcharts.chart('LivePeople', {

    title: {
        text: 'NO OF PEOPLE IN THE LIVE PROJECT'
    },

    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },

    series: [{
        type: 'pie',
        allowPointSelect: true,
        keys: ['name', 'y', 'selected', 'sliced'],
        data:noofEmployee,
        showInLegend: true
    }]
});

}

$scope.noOfPeopleInTheMaintanenceProject=function()
{
var maintaEmployee=projectService.getNoEmployeeInTheMaintaProject();
console.log(maintaEmployee);
Highcharts.chart('MaintanencePeople', {

    title: {
        text: 'NO OF PEOPLE IN THE MAINTANENECE PROJECT'
    },

    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },

    series: [{
        type: 'pie',
        allowPointSelect: true,
        keys: ['name', 'y', 'selected', 'sliced'],
        data:maintaEmployee,
        showInLegend: true
    }]
});
}

$scope.LivePerProductCost=function()
{
var cost=projectService.getCostPerLiveProject();

Highcharts.chart('LiveProductCost', {

    title: {
        text: 'LIVE PROJECT PRODUCT COST AGAINST HOUR'
    },

    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },

    series: [{
        type: 'pie',
        allowPointSelect: true,
        keys: ['name', 'y', 'selected', 'sliced'],
        data:cost,
        showInLegend: true
    }]
});
}

$scope.maintanencePerProductCost=function()
{

var maitanencecost=projectService.getCostPerMaintanenceProject()
console.log(maitanencecost)
Highcharts.chart('ProductCost', {

    title: {
        text: 'MAINTANENCE PROJECT PRODUCT COST AGAINST HOUR'
    },

    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },

    series: [{
        type: 'pie',
        allowPointSelect: true,
        keys: ['name', 'y', 'selectZed', 'sliced'],
        data:maitanencecost,
        showInLegend: true
    }]
});
}

$scope.getProjectStatus=function()
{
projectService.getyearlyProjectStatusActive().then(function(result)
{
var activeArray=result.data;
for(i=0;i<activeArray.length;i++)
{
if(activeArray[i].mth==1)
{
var firstMonthActive=[]
firstMonthActive.push(activeArray[i])
var firstActiveValue=firstMonthActive.length;
projectService.firstMonthArrayvalue(firstActiveValue)
console.log(firstActiveValue);
}


if(activeArray[i].mth==2)
{
var secMonthActive=[]
secMonthActive.push(activeArray[i])
var secActiveValue=secMonthActive.length;
projectService.firstMonthArrayvalue(secActiveValue);
console.log(secActiveValue);
}


if(activeArray[i].mth==3)
{
var thirMonthActive=[]
thirMonthActive.push(activeArray[i])
var thirActiveValue=thirMonthActive.length;
projectService.firstMonthArrayvalue(thirActiveValue);

console.log(thirActiveValue);
}


if(activeArray[i].mth==4)
{
var fourMonthActive=[]
fourMonthActive.push(activeArray[i])
var fourActiveValue=fourMonthActive.length;
projectService.firstMonthArrayvalue(fourActiveValue);

console.log(fourActiveValue);
}


if(activeArray[i].mth==5)
{
var fifthMonthActive=[]
fifthMonthActive.push(activeArray[i])
var fifthActiveValue=fifthMonthActive.length;
projectService.firstMonthArrayvalue(fifthActiveValue);
console.log(fifthActiveValue);
}


if(activeArray[i].mth==6)
{
var sixMonthActive=[]
sixMonthActive.push(activeArray[i])
var sixActiveValue=sixMonthActive.length;
projectService.firstMonthArrayvalue(sixActiveValue);

console.log(sixActiveValue);
}


if(activeArray[i].mth==7)
{
var sevenMonthActive=[]
sevenMonthActive.push(activeArray[i])
var sevenActiveValue=sevenMonthActive.length;
projectService.firstMonthArrayvalue(sevenActiveValue);

console.log(sevenActiveValue);
}


if(activeArray[i].mth==8)
{
var eightMonthActive=[]
eightMonthActive.push(activeArray[i])
var eightActiveValue=eightMonthActive.length;
projectService.firstMonthArrayvalue(eightActiveValue)

console.log(eightActiveValue);

}

if(activeArray[i].mth==9)
{
var nineMonthActive=[]
nineMonthActive.push(activeArray[i])
var nineActiveValue=nineMonthActive.length;
projectService.firstMonthArrayvalue(nineActiveValue)

console.log(nineActiveValue);
}


if(activeArray[i].mth==10)
{
var tenMonthActive=[]
tenMonthActive.push(activeArray[i])
var tenActiveValue=tenMonthActive.length;
projectService.firstMonthArrayvalue(tenActiveValue);

console.log(tenActiveValue);
}


if(activeArray[i].mth==11)
{
var elevenMonthActive=[]
elevenMonthActive.push(activeArray[i])
var elevenActiveValue=elevenMonthActive.length;
projectService.firstMonthArrayvalue(elevenActiveValue);

console.log(elevenActiveValue);
}


if(activeArray[i].mth==12)
{
var twelthMonthActive=[]
twelthMonthActive.push(activeArray[i])
var twelthActiveValue=twelthMonthActive.length;
projectService.firstMonthArrayvalue(twelthActiveValue);

console.log(twelthActiveValue);

}
$scope.projectStatus();

}




projectService.getyearlyProjectStatusInactive().then(function(result){
console.log("inactive",result.data);
var InactiveArray=result.data;
for(i=0;i<InactiveArray.length;i++)
{
if(InactiveArray[i].mth==1)
{
var firstMonthInActive=[]
firstMonthInActive.push(InactiveArray[i])
var firstInActiveValue=firstMonthInActive.length;
console.log(firstInActiveValue);
projectService.secMonthArrayvalue(firstInActiveValue);
}


if(InactiveArray[i].mth==2)
{
var secMonthInActive=[]
secMonthInActive.push(InactiveArray[i])
var secInActiveValue=secMonthInActive.length;
projectService.secMonthArrayvalue(secInActiveValue);
console.log(secInActiveValue);
}


if(InactiveArray[i].mth==3)
{
var thirMonthInActive=[]
thirMonthInActive.push(InactiveArray[i])
var thirInActiveValue=thirMonthInActive.length;
projectService.secMonthArrayvalue(thirInActiveValue);

console.log(thirInActiveValue);
}


if(InactiveArray[i].mth==4)
{
var fourMonthInActive=[]
fourMonthInActive.push(InactiveArray[i])
var fourInActiveValue=fourMonthInActive.length;
projectService.secMonthArrayvalue(fourInActiveValue);

console.log(fourInActiveValue);
}


if(InactiveArray[i].mth==5)
{
var fifthMonthInActive=[]
fifthMonthInActive.push(InactiveArray[i])
var fifthInActiveValue=fifthMonthInActive.length;
projectService.secMonthArrayvalue(fifthInActiveValue);

console.log(fifthInActiveValue);
}


if(InactiveArray[i].mth==6)
{
var sixMonthInActive=[]
sixMonthInActive.push(InactiveArray[i])
var sixInActiveValue=sixMonthInActive.length;
projectService.secMonthArrayvalue(sixInActiveValue);

console.log(sixInActiveValue);
}


if(InactiveArray[i].mth==7)
{
var sevenMonthInActive=[]
sevenMonthInActive.push(InactiveArray[i])
var sevenInActiveValue=sevenMonthInActive.length;
projectService.secMonthArrayvalue(sevenInActiveValue);

console.log(sevenInActiveValue);
}


if(InactiveArray[i].mth==8)
{
var eightMonthInActive=[]
eightMonthInActive.push(InactiveArray[i])
var eightInActiveValue=eightMonthInActive.length;
projectService.secMonthArrayvalue(eightInActiveValue)

console.log(eightInActiveValue);

}

if(InactiveArray[i].mth==9)
{
var nineMonthInActive=[]
nineMonthInActive.push(InactiveArray[i])
var nineActiveInValue=nineMonthInActive.length;
projectService.secMonthArrayvalue(nineActiveInValue);

console.log(nineInActiveValue);
}


if(InactiveArray[i].mth==10)
{
var tenMonthInActive=[]
tenMonthInActive.push(InactiveArray[i])
var tenInActiveValue=tenMonthInActive.length;
projectService.secMonthArrayvalue(tenInActiveValue);

console.log(tenInActiveValue);
}


if(InactiveArray[i].mth==11)
{
var elevenMonthInActive=[]
elevenMonthInActive.push(InactiveArray[i])
var elevenInActiveValue=elevenMonthInActive.length;
projectService.secMonthArrayvalue(elevenInActiveValue);

console.log(elevenInActiveValue);
}


if(InactiveArray[i].mth==12)
{
var twelthMonthInActive=[]
twelthMonthInActive.push(InactiveArray[i])
var twelthInActiveValue=twelthMonthInActive.length;
projectService.secMonthArrayvalue(twelthInActiveValue);

console.log(twelthInActiveValue);

}
$scope.projectStatus();

}

projectService.getyearlyProjectStatusProduction().then(function(result){
console.log("production",result.data);
var ProductionArray=result.data;
for(i=0;i<ProductionArray.length;i++)
{
if(ProductionArray[i].mth==1)
{
var firstMonthProduction=[]
firstMonthProduction.push(ProductionArray[i])
var firstProductionValue=firstMonthActive.length;
projectService.thirdMonthArrayvalue(firstProductionValue)

console.log(firstProductionValue);
}


if(ProductionArray[i].mth==2)
{
var secMonthProduction=[]
secMonthProduction.push(ProductionArray[i])
var secProductionValue=secMonthProduction.length;
projectService.thirdMonthArrayvalue(secProductionValue);
console.log(secProductionValue);
}


if(ProductionArray[i].mth==3)
{
var thirMonthProduction=[]
thirMonthProduction.push(ProductionArray[i])
var thirProductionValue=thirMonthProduction.length;
projectService.thirdMonthArrayvalue(thirProductionValue);

console.log(thirProductionValue);
}


if(ProductionArray[i].mth==4)
{
var fourMonthProduction=[]
fourMonthProduction.push(ProductionArray[i])
var fourProductionValue=fourMonthProduction.length;
projectService.thirdMonthArrayvalue(fourProductionValue);

console.log(fourProductionValue);
}


if(ProductionArray[i].mth==5)
{
var fifthMonthProduction=[]
fifthMonthProduction.push(ProductionArray[i])
var fifthProductionValue=fifthMonthProduction.length;
projectService.thirdMonthArrayvalue(fifthProductionValue);

console.log(fifthProductionValue);
}


if(ProductionArray[i].mth==6)
{
var sixMonthProduction=[]
sixMonthProduction.push(ProductionArray[i])
var sixProductionValue=sixMonthProduction.length;
projectService.thirdMonthArrayvalue(sixProductionValue);

console.log(sixProductionValue);
}


if(ProductionArray[i].mth==7)
{
var sevenMonthProduction=[]
sevenMonthProduction.push(ProductionArray[i])
var sevenProductionValue=sevenMonthProduction.length;
projectService.thirdMonthArrayvalue(sevenProductionValue);

console.log(sevenProductionValue);
}


if(ProductionArray[i].mth==8)
{
var eightMonthProduction=[]
eightMonthProduction.push(activeArray[i])
var eightProductionValue=eightMonthProduction.length;
projectService.thirdMonthArrayvalue(eightProductionValue)

console.log(eightProductionValue);

}

if(ProductionArray[i].mth==9)
{
var nineMonthProduction=[]
nineMonthProduction.push(ProductionArray[i])
var nineProductionValue=nineMonthProduction.length;
projectService.thirdMonthArrayvalue(nineProductionValue);

console.log(nineProductionValue);
}


if(ProductionArray[i].mth==10)
{
var tenMonthProduction=[]
tenMonthProduction.push(ProductionArray[i])
var tenProductionValue=tenMonthProduction.length;
projectService.thirdMonthArrayvalue(tenProductionValue);

console.log(tenProductionValue);
}


if(ProductionArray[i].mth==11)
{
var elevenMonthProduction=[]
elevenMonthProduction.push(ProductionArray[i])
var elevenProductionValue=elevenMonthProduction.length;
projectService.thirdMonthArrayvalue(elevenProductionValue);

console.log(elevenProductionValue);
}


if(ProductionArray[i].mth==12)
{
var twelthMonthProduction=[]
twelthMonthProduction.push(ProductionArray[i])
var twelthProductionValue=twelthMonthProduction.length;
projectService.thirdMonthArrayvalue(twelthProductionValue);

console.log(twelthProductionValue);

}
$scope.projectStatus();

}
projectService.getyearlyProjectStatusMaintanence().then(function(result){
console.log("maintanence",result.data);
var MaintanenceArray=result.data;
for(i=0;i<MaintanenceArray.length;i++)
{
if(MaintanenceArray[i].mth==1)
{
var firstMonthMaintanence=[]
firstMonthMaintanence.push(MaintanenceArray[i])
var firstMaintanenceValue=firstMonthMaintanence.length;
projectService.fourthMonthArrayvalue(firstMaintanenceValue)

console.log(firstMaintanenceValue);
}


if(MaintanenceArray[i].mth==2)
{
var secMonthMaintanence=[]
secMonthMaintanence.push(MaintanenceArray[i])
var secMaintanenceValue=secMonthMaintanence.length;
projectService.fourthMonthArrayvalue(secMaintanenceValue);

console.log(secMaintanenceValue);
}


if(MaintanenceArray[i].mth==3)
{
var thirMonthMaintanence=[]
thirMonthMaintanence.push(MaintanenceArray[i])
var thirMaintanenceValue=thirMonthMaintanence.length;
projectService.fourthMonthArrayvalue(thirMaintanenceValue);

console.log(thirMaintanenceValue);
}


if(MaintanenceArray[i].mth==4)
{
var fourMonthMaintanence=[]
fourMonthMaintanence.push(MaintanenceArray[i])
var fourMaintanenceValue=fourMonthMaintanence.length;
projectService.fourthMonthArrayvalue(fourMaintanenceValue);

console.log(fourMaintanenceValue);
}


if(MaintanenceArray[i].mth==5)
{
var fifthMonthMaintanence=[]
fifthMonthMaintanence.push(MaintanenceArray[i])
var fifthMaintanenceValue=fifthMonthMaintanence.length;
projectService.fourthMonthArrayvalue(fifthMaintanenceValue);

console.log(fifthMaintanenceValue);
}


if(MaintanenceArray[i].mth==6)
{
var sixMonthMaintanence=[]
sixMonthMaintanence.push(MaintanenceArray[i])
var sixMaintanenceValue=sixMonthMaintanence.length;
projectService.fourthMonthArrayvalue(sixMaintanenceValue);

//console.log(sixActiveValue);
}


if(MaintanenceArray[i].mth==7)
{
var sevenMonthMaintanence=[]
sevenMonthMaintanence.push(MaintanenceArray[i])
var sevenMaintanenceValue=sevenMonthMaintanence.length;
projectService.fourthMonthArrayvalue(sevenMaintanenceValue);

console.log(sevenMaintanenceValue);
}


if(MaintanenceArray[i].mth==8)
{
var eightMonthMaintanence=[]
eightMonthMaintanence.push(MaintanenceArray[i])
var eightMaintanenceValue=eightMonthMaintanence.length;
projectService.fourthMonthArrayvalue(eightMaintanenceValue)

console.log(eightMaintanenceValue);

}

if(MaintanenceArray[i].mth==9)
{
var nineMonthMaintanence=[]
nineMonthMaintanence.push(MaintanenceArray[i])
var nineMaintanenceValue=nineMonthMaintanence.length;
projectService.fourthMonthArrayvalue(nineMaintanenceValue);

console.log(nineMaintanenceValue);
}


if(MaintanenceArray[i].mth==10)
{
var tenMonthMaintanence=[]
tenMonthMaintanence.push(MaintanenceArray[i])
var tenMaintanenceValue=tenMonthMaintanence.length;
projectService.fourthMonthArrayvalue(tenMaintanenceValue);

console.log(tenMaintanenceValue);
}


if(MaintanenceArray[i].mth==11)
{
var elevenMonthMaintanence=[]
elevenMonthMaintanence.push(MaintanenceArray[i])
var elevenMaintanenceValue=elevenMonthMaintanence.length;
projectService.fourthMonthArrayvalue(elevenMaintanenceValue);

console.log(elevenMaintanenceValue);
}


if(MaintanenceArray[i].mth==12)
{
var twelthMonthMaintanence=[]
twelthMonthMaintanence.push(MaintanenceArray[i])
var twelthMaintanenceValue=twelthMonthMaintanence.length;
projectService.fourthMonthArrayvalue(twelthMaintanenceValue);

console.log(twelthMaintanenceValue);

}
$scope.projectStatus();

}
projectService.getyearlyProjectStatusSlack().then(function(result){
console.log("slack",result.data);
var SlackArray=result.data;
for(i=0;i<SlackArray.length;i++)
{
if(SlackArray[i].mth==1)
{
var firstMonthSlack=[]
firstMonthSlack.push(SlackArray[i])
var firstSlackValue=firstMonthSlack.length;
projectService.fiveMonthArrayvalue(firstSlackValue)

console.log(firstSlackValue);
}


if(SlackArray[i].mth==2)
{
var secMonthSlack=[]
secMonthSlack.push(SlackArray[i])
var secSlackValue=secMonthSlack.length;
projectService.fiveMonthArrayvalue(secSlackValue);
console.log(secSlackValue);
}


if(SlackArray[i].mth==3)
{
var thirMonthSlack=[]
thirMonthSlack.push(SlackArray[i])
var thirSlackValue=thirMonthSlack.length;
projectService.fiveMonthArrayvalue(thirSlackValue);
console.log(thirSlackValue);
}


if(SlackArray[i].mth==4)
{
var fourMonthSlack=[]
fourMonthSlack.push(SlackArray[i])
var fourSlackValue=fourMonthSlack.length;
projectService.fiveMonthArrayvalue(fourSlackValue);
console.log(fourSlackValue);
}


if(SlackArray[i].mth==5)
{
var fifthMonthSlack=[]
fifthMonthSlack.push(SlackArray[i])
var fifthSlackValue=fifthMonthSlack.length;
projectService.fiveMonthArrayvalue(fifthSlackValue);
console.log(fifthSlackValue);
}


if(SlackArray[i].mth==6)
{
var sixMonthSlack=[]
sixMonthSlack.push(SlackArray[i])
var sixSlackValue=sixMonthSlack.length;
projectService.fiveMonthArrayvalue(sixSlackValue);
console.log(sixSlackValue);
}


if(SlackArray[i].mth==7)
{
var sevenMonthSlack=[]
sevenMonthSlack.push(SlackArray[i])
var sevenSlackValue=sevenMonthSlack.length;
projectService.fiveMonthArrayvalue(sevenSlackValue);
console.log(sevenSlackValue);
}


if(SlackArray[i].mth==8)
{
var eightMonthSlack=[]
eightMonthSlack.push(SlackArray[i])
var eightSlackValue=eightMonthSlack.length;
projectService.fiveMonthArrayvalue(eightSlackValue)
console.log(eightSlackValue);

}

if(SlackArray[i].mth==9)
{
var nineMonthSlack=[]
nineMonthSlack.push(SlackArray[i])
var nineSlackValue=nineMonthSlack.length;
projectService.fiveMonthArrayvalue(nineSlackValue)
console.log(nineSlackValue);
}


if(SlackArray[i].mth==10)
{
var tenMonthSlack=[]
tenMonthSlack.push(SlackArray[i])
var tenSlackValue=tenMonthSlack.length;
projectService.fiveMonthArrayvalue(tenSlackValue);
console.log(tenSlackValue);
}


if(SlackArray[i].mth==11)
{
var elevenMonthSlack=[]
elevenMonthSlack.push(SlackArray[i])
var elevenSlackValue=elevenMonthSlack.length;
projectService.fiveMonthArrayvalue(elevenSlackValue);
console.log(elevenSlackValue);
}


if(SlackArray[i].mth==12)
{
var twelthMonthSlack=[]
twelthMonthSlack.push(SlackArray[i])
var twelthSlackValue=twelthMonthSlack.length;
projectService.fiveMonthArrayvalue(twelthSlackValue);
console.log(twelthSlackValue);

}

}
$scope.projectStatus();

})
})
})
})
})
}


$scope.getYearlyProjectStatus=function()
{
//var arrayofgraph=projectService.totalArrayvalue();
//console.log(arrayofgraph);
var yyy=[]
 yyy=projectService.getfirstMonthArrayvalue();
console.log(yyy);
}


$scope.hoursSpentOnLiveProjectdata=function()
{
var fullHoursData=[];
projectService.getHoursSpendOnLiveProject().then(function(result){
console.log(result.data);
var liveProjectData=result.data;

for(var i=0;i<liveProjectData.length;i++)
{
var newArray=[];
console.log(liveProjectData[i].Projectstartdate);
var startDate=moment(liveProjectData[i].Projectstartdate);
var endDate=moment(new Date());
var d = endDate.diff(startDate, 'days');
console.log(d+1);
var HourSpend=(d+1)*8
liveProjectData[i].hoursspend=HourSpend
newArray.push(liveProjectData[i].Nameoftheproject);
newArray.push(liveProjectData[i].hoursspend);



fullHoursData.push(newArray);
}
projectService.setHourOnLiveProject(fullHoursData);
$scope.hoursSpentOnLiveProject();


return fullHoursData;

})

}


$scope.hoursSpentOnMaintaProjectdata=function()
{
var fullHoursData=[];
projectService.getHoursSpendOnMaintanenceProject().then(function(result){
console.log(result.data);
var MaintaProjectData=result.data;

for(var i=0;i<MaintaProjectData.length;i++)
{
var newArray=[];
console.log(MaintaProjectData[i].Projectstartdate);
var startDate=moment(MaintaProjectData[i].Projectstartdate);
var endDate=moment(new Date());
var d = endDate.diff(startDate, 'days');
console.log(d+1);
var HourSpend=(d+1)*8
MaintaProjectData[i].hoursspend=HourSpend
newArray.push(MaintaProjectData[i].Nameoftheproject);
newArray.push(MaintaProjectData[i].hoursspend);



fullHoursData.push(newArray);
}
projectService.setHourOnMaintaProject(fullHoursData);
$scope.hoursSpentOnMaintanceProject();


return fullHoursData;

})

}

$scope.getNoOFPeopleIntheLiveProject=function()
{
var employeeTotal=[];
projectService.getNoOfPeopleInTheLiveProject().then(function(result){
console.log(result.data)
var s=result.data;
console.log(s)
for(var i=0;i<s.length;i++)
{
var newObj=[]

newObj[0]=s[i].Nameoftheproject;

newObj[1]=s[i].Noofemployees;
console.log(newObj);
employeeTotal.push(newObj);

}
console.log(employeeTotal);
projectService.setNoofEmployeeInTheLiveProject(employeeTotal);
$scope.noOfPeopleInTheLiveProject();
})
}


$scope.getNoOFPeopleIntheMaintaProject=function()
{
var employeeTotal=[];
projectService.getNoOfPeopleInTheMaintanenceProject().then(function(result){
console.log(result.data)
var s=result.data;
console.log(s)
for(var i=0;i<s.length;i++)
{
var newObj=[]

newObj[0]=s[i].Nameoftheproject;

newObj[1]=s[i].Noofemployees;
console.log(newObj);
employeeTotal.push(newObj);

}
console.log(employeeTotal);
projectService.setNoofEmployeeInTheMaintaProject(employeeTotal);
$scope.noOfPeopleInTheMaintanenceProject();
})
}

$scope.getCostOfLiveProject=function()
{
var fullcostData=[];
projectService.getCostPerLiveProjectdata().then(function(result){
console.log(result.data)
var s=result.data;
console.log(s)

for(var i=0;i<s.length;i++)
{
var newArray=[];
console.log(s[i].Projectstartdate);
var startDate=moment(s[i].Projectstartdate);
var endDate=moment(new Date());
var d = endDate.diff(startDate, 'days');
console.log(d+1);
var HourSpend=(d+1)*8
var cost=s[i].CostPerHour;
s[i].totalcost=HourSpend*cost;
//liveProjectData[i].hoursspend=HourSpend
newArray.push(s[i].Nameoftheproject);
newArray.push(s[i].totalcost);



fullcostData.push(newArray);
}

console.log(fullcostData);
projectService.setCostPerLiveProject(fullcostData);
$scope.LivePerProductCost();
})
}


$scope.getCostOfMaintanenceProject=function()
{
var fullcostData=[];
projectService.getCostPerMaintanenceProjectdata().then(function(result){
console.log(result.data)
var s=result.data;
console.log(s)
for(var i=0;i<s.length;i++)
{
var newArray=[];
console.log(s[i].Projectstartdate);
var startDate=moment(s[i].Projectstartdate);
var endDate=moment(new Date());
var d = endDate.diff(startDate, 'days');
console.log(d+1);
var HourSpend=(d+1)*8
var cost=s[i].CostPerHour;
s[i].totalcost=HourSpend*cost;
//liveProjectData[i].hoursspend=HourSpend
newArray.push(s[i].Nameoftheproject);
newArray.push(s[i].totalcost);



fullcostData.push(newArray);
}

console.log(fullcostData);
projectService.setCostPerMaintanenceProject(fullcostData);
$scope.maintanencePerProductCost();
})
}










function init()
{
$scope.getProjectStatus();
$scope.getYearlyProjectStatus();
$scope.hoursSpentOnLiveProjectdata();
$scope.hoursSpentOnMaintaProjectdata();
$scope.getNoOFPeopleIntheLiveProject();
$scope.getNoOFPeopleIntheMaintaProject();
$scope.getCostOfLiveProject();
$scope.getCostOfMaintanenceProject();

//$scope.hoursSpentOnMaintanceProject();();
//$scope.maintanencePerProductCost();
//$scope.projectStatus();



}

init();

})


