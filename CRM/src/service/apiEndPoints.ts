const baseURL = 'https://www.surflokal.com/';
//security_key and access_token in headers for all apis
const apiUri = {
    auth: {
        login: 'wp-json/custom-plugin/login/', //email,password,device_type = {1 for android ,2 for IOS},device_token in Form Data
        logout: 'wp-json/custom-plugin/logout/',
        socialLogin: 'webapi/v1/login/emaillogin.php', //email,username,device_type,device_token,social_id,social_token,user_type , first_name,last_name in formData and security_key in header
    },
    surfMLP: {
        getFilter: 'webapi/v1/SubFilter/websubfilter.php',
        getProperties: 'webapi/v1/property/?limit=',//send limit in URL and 
        appFilter: 'webapi/v1/AppFilter?', //data_custom_taxonomy and data_customvalue
        clearFilter: 'webapi/v1/AppFilter/clearfilter.php',
        singleProperty: 'webapi/v1/singleproperty/?post_id=' //Property ID in url
    }
};

export { apiUri, baseURL };