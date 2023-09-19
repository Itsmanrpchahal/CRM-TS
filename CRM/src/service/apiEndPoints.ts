const baseURL = 'https://www.surflokal.com/';

const apiUri = {
    auth: {
        login: 'wp-json/custom-plugin/login/', //email,password,device_type = {1 for android ,2 for IOS},device_token in Form Data
    },
};

export { apiUri, baseURL };