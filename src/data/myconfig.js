import field1  from './fields1.js';
import field2  from './fields2.js';


///using only this one for AACN FORM STYLE DEMO
const myConfig = {
    "title": "My Styled Example Form",
    "endpoints": {"get":"https://testendpoint.free.beeceptor.com",
                  "post":"https://testendpoint.free.beeceptor.com",
                  "put": "https://testendpoint.free.beeceptor.com",
                  "delete":"https://testendpoint.free.beeceptor.com",
                  "patch":"https://testendpoint.free.beeceptor.com"},
    "type": "",
    "vertical": "excellence",
    "globalFormClasses":['theme row customer-address'],
    "globalFormStyles":{},
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
    "vertical": "events",
    "globalFormClasses": ['theme membership-form row'],
    "globalFormStyles":{},
    "fields": field2
}

export  {myConfig, myConfig2}