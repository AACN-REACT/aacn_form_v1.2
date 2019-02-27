import field1  from './fields1.js';



const myConfig = {
    "title": "My Example Form",
    "endpoints": {"get":"https://testendpoint.free.beeceptor.com",
                  "post":"https://testendpoint.free.beeceptor.com",
                  "put": "https://testendpoint.free.beeceptor.com",
                  "delete":"https://testendpoint.free.beeceptor.com",
                  "patch":"https://testendpoint.free.beeceptor.com"},
    "default": "",
    "globalFormClasses":[],
    "globalFormStyles":{},
    "fields": field1
}

export default myConfig