const axios = require('axios');
const supplierApis = require('./supplierApis.js');

function apiCalls(){
    function fetchAsgardianActiveLikes(){
        return new Promise((resolve, reject) => {
            axios.get('https://asgard.goso.space/api/services/1/1')
                .then(function(response){
                    resolve(response);
                })
                .catch(function(error){
                    reject(error);
                });
        });
    }   

    function fetchAsgardianActiveViews(){
        return new Promise((resolve, reject) => {
            axios.get('https://asgard.goso.space/api/services/4/1')
                .then(function(response){
                    resolve(response);
                })
                .catch(function(error){
                    reject(error);
                });
        });
    }   

    function fetchAsgardianActiveSaves(){
        return new Promise((resolve, reject) => {
            axios.get('https://asgard.goso.space/api/services/5/1')
                .then(function(response){
                    resolve(response);
                })
                .catch(function(error){
                    reject(error);
                });
        });
    }   

    function fetchAsgardianActiveImpressions(){
        return new Promise((resolve, reject) => {
            axios.get('https://asgard.goso.space/api/services/6/1')
                .then(function(response){
                    resolve(response);
                })
                .catch(function(error){
                    reject(error);
                });
        });
    }   

    function placeOrder(request){

        const apiUrl = supplierApis[request.supplier];
        const apiKey = "KEY_HERE";
        const action = "add";
        const serviceId = "SERVICE_ID_HERE";
        const postUrl = "POST_URL_HERE";
        const quantity = "QUANTITY_HERE";

        axios.post(apiUrl, {
            "key": 
        })

    }
    return { fetchAsgardianActiveLikes, fetchAsgardianActiveViews, fetchAsgardianActiveSaves, fetchAsgardianActiveImpressions, placeOrder };
}

module.exports = apiCalls();
