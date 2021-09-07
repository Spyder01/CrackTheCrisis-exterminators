var axios = require('axios');
var FormData = require('form-data');

const compile=()=>{
    var data = new FormData();
const cod = `#include <iostream>
using namespace std;

int main() {
    int numbers[5] = {7, 5, 6, 12, 35};

    cout << "The numbers are: ";

    //  Printing array elements
    // using range based for loop
    for (const int &n : numbers) {
        cout << n << "  ";
    }


    cout << "The numbers are: ";

    //  Printing array elements
    // using traditional for loop
    for (int i = 0; i < 5; ++i) {
        cout << numbers[i] << "  ";
    }

    return 0;
}`;
data.append('lang', 'Cpp');
data.append('code', cod);

data.append('input', '');
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

            axios(config2)
                .then(function (response) {
                    console.log(response.data.output);
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