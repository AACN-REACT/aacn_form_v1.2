

// this function retrieves the customer key from a given url


//retrieve customer key from the url
export default function getCustomerKey(){
            //let url = window.location.href;
            let url = "CID=ad790f32-f501-4838-8e4a-c1b057c44f30"
            let re= /(CID=)((\w+|\-)+)+/gi
            return re.exec(url)[2]
    }