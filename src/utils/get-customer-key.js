

// this function retrieves the customer key from a given url


//retrieve customer key from the url
export default function getCustomerKey(){
        let url = window.location.href;
        let re= /(CID=)((\w+|\-)+)+/gi;
        let ans =  re.exec(url)!==null? re.exec(url)[2]:"ad790f32-f501-4838-8e4a-c1b057c44f30"
        return ans
}