//1. Import ares
const axios = require('axios');
var fs = require('fs');
let cheerio = require('cheerio');
const jsdom = require("jsdom");

//console.log('Hello');
options={

};


// html string
//const htmlStr = "<h1>Hello World!</h1>";
 
    // make a new parser

const bearerToken = "78e2a746f750bff43a7b2bd8c9e8b7ed2dc22c02ee24e19671794f42380920584579a803982b7323dea03017e932980bd1d7424f2a28822911f72bd7d34db61b0e6641ba99fa5366896852354c40c0056f0befa3439b87b89faf97e1f832fbd081066a66bca587241fec18267149c98c0ecfb7b0da0bd1223f7bf041d04131b0"  


axios.get(`https://spys.one/free-proxy-list/IN/`,
{ 
    headers: {
        "headers": {
          "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7", 
          "Accept-Encoding": "gzip, deflate, br", 
          "Accept-Language": "en-US,en;q=0.9", 
          "Host": "httpbin.org", 
          "Sec-Ch-Ua": "\"Google Chrome\";v=\"111\", \"Not(A:Brand\";v=\"8\", \"Chromium\";v=\"111\"", 
          "Sec-Ch-Ua-Mobile": "?0", 
          "Sec-Ch-Ua-Platform": "\"Windows\"", 
          "Sec-Fetch-Dest": "document", 
          "Sec-Fetch-Mode": "navigate", 
          "Sec-Fetch-Site": "none", 
          "Sec-Fetch-User": "?1", 
          "Upgrade-Insecure-Requests": "1", 
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36", 
          "X-Amzn-Trace-Id": "Root=1-641adce5-02a81df37856a89914a5d2ae"
        }
    }
})
    .then((response) => {
        if(response.status === 200) {
        const html = response.data;

        console.log(html);
        fs.appendFile('index3.html', html, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });   
            //const $ = cheerio.load(html); 
    }
    }, (err) => console.log(err) );

/*
axios.get(`http://free-proxy.cz/en/proxylist/country/IN/all/ping/all/1`)
.then(function (response) {
    // handle success
    console.log(response);
    fs.appendFile('index3.html', response, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });    
})
.catch(function (error) {
    // handle error
    console.log(error);
})
.finally(function () {
    // always executed
});
/* curl.get(`http://free-proxy.cz/en/proxylist/country/IN/all/ping/all/1`, options, function(err, response, body) {
    
    
}); */
