
singapp.factory("employeefromService", function ($http) {

    var convertJsonToArray = function(jsonConfiguration){
        var extractedData=[];
        var label=[]
        var k = Object.keys(jsonConfiguration);
        console.log(k)
        for(i=0;i<k.length;i++)
        {
      if(k[i]!=='Skillsdata'||k[i]!=="Qalificationdata"||k[i]!=="Certificationdata"||k[i]!=="Languagedata"||k[i]!=="Dependentdata"||k[i]!=="Emergencycontactdata"||k[i]!=="Documentdata")
        {
              var objs = {
                "name":splitCamelCase(k[i]),
                "realName": k[i],
                "type": jsonConfiguration[k[i]].type,
                "description": jsonConfiguration[k[i]].description,
                "modelValue": jsonConfiguration[k[i]].modelValue
                    };
                    extractedData.push(objs);
        };
 if(k[i]=="Skillsdata"||k[i]=="Qalificationdata"||k[i]=="Certificationdata"||k[i]=="Languagedata"||k[i]=="Dependentdata"||k[i]=="Emergencycontactdata"||k[i]=="Documentdata")
               {

                   var r=jsonConfiguration[k[i]];
                    for(var s=0;s<r.length;s++)
                           {
                   var y=Object.keys(r[s])
                           y.forEach(function (objkeys, index) {
//                               console.log(objkeys);

                                  var objs = {
                                       "name": splitCamelCase(objkeys),
                                        "realName":objkeys,
                                        "type": r[s][objkeys].type,
                                        "description": r[s][objkeys].description,
                                         "modelValue": r[s][objkeys].modelValue
                                             };
                                             extractedData.push(objs);
                                                     });

                                                  }
                                                  }
             }

         console.log(extractedData);
            return extractedData;
                                              }



    function splitCamelCase (s) {
        return s.split(/(?=[A-Z])/).join(' ').split('_').join(' ').split('-').join(' ');
    };

    return{
    convertJsonToArray:convertJsonToArray
           }
});



singapp.factory("fromService", function ($http) {

    var convertJsonToArray = function(jsonConfiguration){
        var extractedData=[];
        var label=[]
        var k = Object.keys(jsonConfiguration);
        k.forEach(function (objkey, index) {

            var obj = {
                "name": splitCamelCase(objkey),
                "realName": objkey,
                "type": jsonConfiguration[k[index]].type,
                "description": jsonConfiguration[k[index]].description,
                "modelValue": jsonConfiguration[k[index]].modelValue

            };
            extractedData.push(obj);
        });
        return extractedData;

    }

    function splitCamelCase (s) {
        return s.split(/(?=[A-Z])/).join(' ').split('_').join(' ').split('-').join(' ');
    };

    return{
        convertJsonToArray:convertJsonToArray
    }
})





