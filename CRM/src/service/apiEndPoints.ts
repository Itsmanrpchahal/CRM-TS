const baseURL = 'https://www.surflokal.com/';
//security_key and access_token in headers for all apis
const apiUri = {
    auth: {
        login: 'wp-json/custom-plugin/login/', //email,password,device_type = {1 for android ,2 for IOS},device_token in Form Data
        logout: 'wp-json/custom-plugin/logout/',
        socialLogin: 'webapi/v1/login/emaillogin.php', //email,username,device_type,device_token,social_id,social_token,user_type , first_name,last_name in formData and security_key in header
    },
    surfMLP: {
        getFilter: 'webapi/v1/CRM/SubFilter/websubfilter.php',
        getProperties: 'webapi/v1/CRM/property/?limit=',//send limit in URL and 
        appFilter: 'webapi/v1/CRM/AppFilter?', //data_custom_taxonomy and data_customvalue
        clearFilter: 'webapi/v1/CRM/AppFilter/clearfilter.php',
        singleProperty: 'webapi/v1/CRM/singleproperty/?post_id=' //Property ID in url
    },
    contact: {
        contactList: 'wp-json/leads/contact'
    }
};

export { apiUri, baseURL };