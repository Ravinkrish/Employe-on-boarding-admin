var singapp = angular.module('helloApp', ['ui.router', 'angularFromUI', 'angularEditFromUI', 'ng-webcam', 'sorting-table', 'angularUtils.directives.dirPagination','ui.bootstrap', 'ui.bootstrap.datetimepicker','angular.chosen']);
singapp.run(function (clientService,jobdetailsservice,trainingsetupService,qualificationService,projectclientService,projectService, employeeprojectService,employeeService,payGradeService,usersalaryService,employeementService,educationService,languageService,trainsessionService,certificationService,employeeratingService) {

     function getClientJsonConfig() {
            clientService.getClientJsonConfig().then(function (resultDetails) {
                clientService.setClientFromConfig(resultDetails.data)
//                console.log(resultDetails.data)
            }, function error(errResponse) {
                console.log("cannot get settings config")
            })
        }



    function getjobDetailsJsonConfig() {
        jobdetailsservice.getjobdetailsJsonConfig().then(function (resultDetails) {
            jobdetailsservice.setjobdetailsFromConfig(resultDetails.data)
            console.log(resultDetails.data)
        }, function error(errResponse) {
            console.log("cannot get settings config")
        })

    }

    function gettrainingsetupJsonConfig() {
        trainingsetupService.gettrainingsetupJsonConfig().then(function (resultDetails) {
            trainingsetupService.settrainingsetupFromConfig(resultDetails.data);
            console.log(resultDetails.data)
        }, function error(errResponse) {
            console.log("cannot get settings config")
        })

    }


    function getqualificationDetailsJsonConfig() {
        qualificationService.getqualificationJsonConfig().then(function (resultDetails) {
            qualificationService.setqualificationFromConfig(resultDetails.data)
            console.log(resultDetails.data);
        }, function error(errResponse) {
            console.log("cannot get settings config")
        })

    }



    function getprojectclientDetailsJsonConfig() {
        projectclientService.getprojectclientJsonConfig().then(function (resultDetails) {
        projectclientService.setprojectclientFromConfig(resultDetails.data)
        console.log(resultDetails.data)
        }, function error(errResponse) {
            console.log("cannot get settings config")
        })

    }

    function getprojectDetailsJsonConfig() {
        projectService.getprojectJsonConfig().then(function (resultDetails) {
            projectService.setprojectFromConfig(resultDetails.data);
            console.log(resultDetails.data);
        }, function error(errResponse) {
            console.log("cannot get settings config")
        })
    }


    function getemployeeprojectDetailsJsonConfig() {
        employeeprojectService.getemployeeprojectJsonConfig().then(function (resultDetails) {
            employeeprojectService.setemployeeprojectFromConfig(resultDetails.data)
            console.log(resultDetails.data)
        }, function error(errResponse) {
            console.log("cannot get settings config")
        })
    }
    function getemployeeDetailsJsonConfig() {
        employeeService.getemployeeJsonConfig().then(function (resultDetails) {
            employeeService.setemployeeFromConfig(resultDetails.data);
            console.log(resultDetails.data);
        }, function error(errResponse) {
            console.log("cannot get settings config")
        })
    }


    function getpayGradeDetailsJsonConfig() {
        payGradeService.getpayGradeJsonConfig().then(function (resultDetails) {
            payGradeService.setpayGradeFromConfig(resultDetails.data);
            console.log(resultDetails.data);
        }, function error(errResponse) {
            console.log("cannot get settings config")
        })


    }

  function getusersalaryjsonConfig() {
               usersalaryService.getusersalaryJsonConfig().then(function (resultDetails) {
               usersalaryService.setusersalaryFromConfig(resultDetails.data);
               console.log(resultDetails.data);
               }, function error(errResponse) {
                console.log("cannot get settings config")
                		})
                	}


    function getemployeementDetailsJsonConfig() {
        employeementService.getemployeementJsonConfig().then(function (resultDetails) {
            employeementService.setemployeementFromConfig(resultDetails.data);
            console.log(resultDetails.data);
        }, function error(errResponse) {
            console.log("cannot get settings config")
        })
    }

    function geteducationDetailsJsonConfig() {
        educationService.geteducationJsonConfig().then(function (resultDetails) {
            educationService.seteducationFromConfig(resultDetails.data);
            console.log(resultDetails.data);
        }, function error(errResponse) {
            console.log("cannot get settings config")
        })
    }

    function getcertificationDetailsJsonConfig() {
        certificationService.getcertificationJsonConfig().then(function (resultDetails) {
            certificationService.setcertificationFromConfig(resultDetails.data);
             console.log(resultDetails.data);
        }, function error(errResponse) {
            console.log("cannot get settings config")
        })
    }


    function getlanguageDetailsJsonConfig() {
        languageService.getlanguageJsonConfig().then(function (resultDetails) {
            languageService.setlanguageFromConfig(resultDetails.data);
            console.log(resultDetails.data);
        }, function error(errResponse) {
            console.log("cannot get settings config")
        })
    }


    function gettrainingsessionDetailsJsonConfig() {
        trainsessionService.gettrainsessionJsonConfig().then(function (resultDetails) {
            trainsessionService.settrainsessionFromConfig(resultDetails.data);
            console.log(resultDetails.data);
        }, function error(errResponse) {
            console.log("cannot get settings config")
        })
    }

     function getratingDetailsJsonConfig() {
            employeeratingService.getemployeeratingJsonConfig().then(function (resultDetails) {
                employeeratingService.setemployeeratingFromConfig(resultDetails.data);
                console.log(resultDetails.data);
            }, function error(errResponse) {
                console.log("cannot get settings config")
            })
        }



    function init() {
        getClientJsonConfig()
        getjobDetailsJsonConfig();
        gettrainingsetupJsonConfig();
        getqualificationDetailsJsonConfig();
        getprojectclientDetailsJsonConfig();
        getprojectDetailsJsonConfig();
        getemployeeprojectDetailsJsonConfig();
        getemployeeDetailsJsonConfig();
        getpayGradeDetailsJsonConfig();
        getemployeementDetailsJsonConfig();
        getusersalaryjsonConfig();
        geteducationDetailsJsonConfig();
        getcertificationDetailsJsonConfig();
        getlanguageDetailsJsonConfig();
        gettrainingsessionDetailsJsonConfig();
        getratingDetailsJsonConfig();

        }

    init();

});

singapp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

               $stateProvider
                   .state('login', {
                   url:'/login',
                    templateUrl:'client/login.html',
                     controller:'loginController'
                          })


                 $stateProvider
                 .state('dashboard', {
                    url:"/dashboard",
                    templateUrl: 'client/dashboardtwo.html',
                     controller:'dashboardCtrl'
                     })




        .state('companydetails', {
            url: "/companydetails",
             templateUrl: 'client/companydetails.html',
               })


        .state('companydetails.companystructure', {
            url: "/companystructure",
            templateUrl:'client/companystructure.html',
             controller:'CompanystructureCtrl'
             })
        .state('companydetails.companygraph', {
            url: "/companygraph",
            templateUrl: 'client/companygraph.html',
            controller: 'companygraphController'
        })


        .state('qualification', {
            url: "/qualification",
            templateUrl: 'client/qualificationsetup.html'
            })
        .state('qualification.skills', {
            url: "/skills",
            templateUrl: 'client/skills.html',
            controller: 'qualificationCtrl'
             })

        .state('qualification.education', {
            url: "/education",
            templateUrl: 'client/quali-education.html',
            controller: 'educationCtrl'

        })
        .state('qualification.certification', {
            url: "/certification",
            templateUrl: 'client/certification.html',
            controller: 'certificationCtrl'

        })
        .state('qualification.language', {
            url: "/language",
            templateUrl: 'client/languages.html',
            controller: 'languageCtrl'
        })

        .state('jobdetailssetup', {
            url: "/jobdetailssetup",
                templateUrl: 'client/jobdetailssetup.html'
            })

        .state('jobdetailssetup.jobdetails', {
            url: "/jobdetails",
            templateUrl: 'client/jobdetails.html',
            controller: 'jobdetailscontroller'

        })
        .state('jobdetailssetup.paygrade', {
            url: "/paygrade",
            templateUrl: 'client/paygrade.html',
            controller: 'payGradeCtrl'
        })


        .state('jobdetailssetup.employeement', {
            url: "/employeement",
            templateUrl: 'client/employeementstatus.html',
            controller: 'employeementCtrl'
        })


        .state('trainingsetup', {
            url: "/trainingsetup",
            templateUrl: 'client/trainingsetup.html'
            })

         .state('registeredusers', {
         url: "/registeredusers",
         templateUrl: 'client/registeredusers.html',
         controller:'routeDetailCtrl'
         })

        .state('trainingsetup.courses', {
            url: "/courses",
            templateUrl: 'client/courses.html',
            controller: 'trainingsetupCtrl'
        })

        .state('trainingsetup.trainingsession', {
            url: "/trainsession",
            templateUrl: 'client/trainingsession.html',
            controller: 'trainsessionCtrl'
        })
        .state('employeetrain', {
                    url: "/employeetrain",
                    templateUrl: 'client/employeetrain.html',
                    controller: 'employeetrainCtrl'
                })
       .state('projectclient', {
            url: "/projectclient",
           templateUrl: 'client/projectclient.html'
         })
        .state('projectclient.client', {
            url: "/clients",
            templateUrl: 'client/projectclientclient.html',
            controller: 'projectclientCtrl'
        })
        .state('projectclient.project', {
            url: "/project",
            templateUrl: 'client/project.html',
            controller: 'projectCtrl'
        })
        .state('employeeproject', {
                    url: "/employeeproject",
                    templateUrl: 'employee/employeeproject.html',
                    controller: 'projectCtrl'
                })
         .state('project', {
                             url: "/project",
                             templateUrl: 'client/project.html',
                             controller: 'projectCtrl'
                         })

        .state('projectclient.employeeproject', {
            url: "/employeeproject",
            templateUrl: 'client/employeeproject.html',
            controller: 'employeeprojectCtrl'
        })

         .state('status', {
                    url: "/status",
                    templateUrl: 'client/status.html',
                    controller:'userdailytaskCtrl'
                })

         .state('status2', {
                             url: "/status2",
                             templateUrl: 'client/status2.html',
                             controller:'userdailytaskCtrl'
                         })
       .state('employee', {
            url: "/employee",
            templateUrl: 'employee/employees.html'

        })

        .state('employee.employeess', {
            url: "/employeess",
            templateUrl: 'employee/employeess.html',
            controller: 'employeeCtrl'
        })

          .state('employeereleave', {
                    url: "/employeereleave",
                    templateUrl: 'client/employeereleave.html',
                    abstract:true
                })



         .state('employeereleave.releaveinfo', {
                url: "/employeereleaveinfo",
               templateUrl: 'client/employeereleaveinfo.html',
               controller:'releaveCtrl'
                })

           .state('employeerating', {
               url: "/employeerating",
               templateUrl: 'client/employeeratingsetup.html',
               abstract:true
             })


           .state('employeerating.employeeratingpermonth', {
               url: "/employeeratingpermonth",
               templateUrl: 'client/employeeRating.html',
               controller:'employeeratingCtrl'

             })



});




angular.module('helloApp').directive('exportTable', function () {
    var link = function ($scope, element, attr) {
            $scope.$on('export-pdf',function(e,d){
            element.exportDetails({ type:'pdf', escape: false });
            })

            $scope.$on('export-excel', function(e,d){
                element.exportDetails({ type:'excel', escape: false });
            });
            $scope.$on('export-doc',function(e,d){
                element. exportDetails({ type:'doc', escape: false});
            });
            $scope.$on('export-csv', function(e,d){
                element. exportDetails({ type:'csv', escape:false });
            });
    }
    return {
        restrict:'CA',
        link:link
    };
});