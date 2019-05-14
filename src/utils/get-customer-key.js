

// this function retrieves the customer key from a given url


//retrieve customer key from the url
export default function getCustomerKey(){
        let url = window.location.href;
        let re= /(CID=)((\w+|\-)+)+/gi;
        let ans =  re.exec(url)!==null? re.exec(url)[2]:null
        if (!ans){
                ans = localStorage.getItem('CID')?localStorage.getItem('CID'):null
        }
        if(!ans){
                ans = re.exec(document.cookie)[2]
        }
        
        return ans
}