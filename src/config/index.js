const env = process.env.REACT_APP_ENV;

let config = {
    baseURL: "http://localhost/"
}

switch(env.toUpperCase()){
    case 'STAGE':
        config.baseURL = "https://stage.skillsunion.com"
        break;
    case 'PRODUCTION':
        config.baseURL = "https://www.skillsunion.com"
        break;
    case 'DEV':
        config.baseURL = "https://dev.skillsunion.com"
        break;
    default:
        config.baseURL = "http://localhost/"
        break;
}

export default config;