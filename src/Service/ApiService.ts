import Axios from "axios"

//Axios.defaults.baseURL="http://web-player.live";
//Axios.defaults.baseURL="http://localhost:8081";

// Axios.interceptors.request.use(function (config) {
    
//     let localStorageData = localStorage.getItem('data');
//     if (localStorageData) {
//         let loginInfo:any = JSON.parse(localStorageData);
//         config.headers.Authorization =  'Bearer ' + loginInfo.auth.token;;
//     }
//     console.log(config);
//     return config;
// });


// Axios.interceptors.response.use(function (response) {
//     return response;
// }, function (error) {
//     if (error.response.status === 401) {
//          localStorage.removeItem('data');
//     } else {
//         return Promise.reject(error.response);
//     }
// });
