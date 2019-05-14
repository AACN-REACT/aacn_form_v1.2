import field1  from './fields1.js';
import field2  from './fields2.js';
import renewform  from './renew';



const myConfig = {
    "title": "My Example Form",
    "endpoints": {"get":"https://testendpoint.free.beeceptor.com",
                  "post":"https://testendpoint.free.beeceptor.com",
                  "put": "https://testendpoint.free.beeceptor.com",
                  "delete":"https://testendpoint.free.beeceptor.com",
                  "patch":"https://testendpoint.free.beeceptor.com"},
    "type": "",
    "globalFormClasses":[],
    "globalFormStyles":{ "box-shadow": "3px 3px 15px gray", padding: "30px"},
    "fields": field1
}









const myConfig2 = {
    "title": "My Example Form",
    "endpoints": {"get":"https://testendpoint.free.beeceptor.com",
                  "post":"https://testendpoint.free.beeceptor.com",
                  "put": "https://testendpoint.free.beeceptor.com",
                  "delete":"https://testendpoint.free.beeceptor.com",
                  "patch":"https://testendpoint.free.beeceptor.com"},
    "type": "",
    "globalFormClasses":[],
    "globalFormStyles":{},
    "fields": field2
}

export  {myConfig, myConfig2}