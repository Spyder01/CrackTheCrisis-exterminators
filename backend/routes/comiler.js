var axios = require('axios');
var FormData = require('form-data');

const compile=(lang,code,input,socket)=>{

var data = new FormData();
var cod,language,inputvalue;
if(code!=undefined){
    cod=code;
}else{
    cod=' ';
}

if(lang!=undefined){
    language=lang;
}else{
    language='C';
}

if(input!=undefined){
    inputvalue=input;
}else{
    inputvalue=' ';
}

console.log(cod,language,inputvalue);

data.append('lang', language);
data.append('code', cod);
data.append('input', inputvalue);
data.append('save', 'false');



var config = {
    method: 'post',
    url: 'https://ide.geeksforgeeks.org/main.php',
    headers: {
        ...data.getHeaders()
    },
    data: data
};

axios(config)
    .then(function (response) {
        const id = response.data.sid;
        setTimeout(() => {
            var data2 = new FormData();
            data2.append('sid', id);
            data2.append('requestType', 'fetchResults');

            var config2 = {
                method: 'post',
                url: 'https://ide.geeksforgeeks.org/submissionResult.php',
                headers: {
                    ...data2.getHeaders()
                },
                data: data2
            };

            var ans=axios(config2)
                .then(function (response) {
                    if(response.data.output!=undefined){
                    socket.emit('data',response.data.output);
                    }else{
                        socket.emit('data',response.data.cmpError);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
           
        }, 5000);
    })
    .catch(function (error) {
        console.log(error);
    });
}

module.exports=compile;