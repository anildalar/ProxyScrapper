//1. Import area
const curl = require('curl');
var fs = require('fs');

const jsdom = require("jsdom");

//console.log('Hello');
options={};


// html string
//const htmlStr = "<h1>Hello World!</h1>";
 
    // make a new parser

const bearerToken = "78e2a746f750bff43a7b2bd8c9e8b7ed2dc22c02ee24e19671794f42380920584579a803982b7323dea03017e932980bd1d7424f2a28822911f72bd7d34db61b0e6641ba99fa5366896852354c40c0056f0befa3439b87b89faf97e1f832fbd081066a66bca587241fec18267149c98c0ecfb7b0da0bd1223f7bf041d04131b0"    
for (let i=0; i<=1; i++){
    curl.get(`https://www.flipkart.com/search?q=tv&page=${i}`, options, function(err, response, body) {
        const dom = new jsdom.JSDOM(body);
        //console.log(discountPrice)
        //console.log(newData)
        //console.log(newData)
        const Title = (dom.window.document.querySelectorAll("div._4rR01T"));
        const discountPrice = dom.window.document.querySelectorAll("div._30jeq3._1_WHN1");
        const mainPrice = (dom.window.document.querySelectorAll("div._3I9_wc._27UcVY"));
        const discountRate = (dom.window.document.querySelectorAll("div._3Ay6Sb"));
        const imageUrl = dom.window.document.querySelectorAll("a._1fQZEK");
        console.log(mainPrice)
        //console.log(imageUrl)
        // console.log('err--->',err);
        //console.log('response--->',response);
    //console.log('body--->', [body]); //.querySelector('div._30jeq3._1_WHN1')
    //const arr = [body]
    // html string
     // 'Hello world'
    //const details = []
    //console.log(newData.length)
    for (let i=0; i < Title.length; i++){
        const url = imageUrl[i].href
        
        // const items = {
        //     discountPrice:Title[i].textContent,
        //     title:discountPrice[i].textContent,
        //     mainPrice:mainPrice[i].textContent,
        //     imageUrl:`https://www.flipkart.com${url}`,
        //     discountRate:discountRate[i].textContent
        // }
        const payLoad = {
                    "data": 
                        {
                            "ProductTitle": Title[i].textContent,
                            "ProductLink": `https://www.flipkart.com${url}`,
                            "ProductSalePrice": discountPrice[i].textContent.substring(1).replace(",", ""),
                            "ProductMRPPrice": mainPrice[i].textContent.substring(1).replace(",", ""),
                            "ProductOFFERDicount": discountRate[i].textContent.substring(0,2)
                        }
                }
        const options = {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${bearerToken}`
            },
            body:JSON.stringify(payLoad)
        }

        // fetch(`http://38.242.236.173:1337/api/product-price-histories`, options)
        // .then((res)=>{
        //     return res.json()
        //     //console.log(res.ok)
        // })
        // .then((data)=>console.log(data))

    //details.push(items)
    //console.log(details)
    // console.log(Title[i].textContent)
    //  const rate = discountPrice[i].textContent
    //  const newRate= rate.substring(1).replace(",", "")
        console.log(mainPrice[i].textContent.substring(1).replace(",", ""))
    //  console.log(url)
     //console.log(rate)
     //console.log(typeof(rate))
     
    // console.log(discountPrice[i].textContent)
    // console.log(mainPrice[i].textContent)
    // console.log(`https://www.flipkart.com${url}`)

    }

    // convert html string into
    
    /* fs.appendFile('./index.html', body, function (err) {
        if (err) throw err;
        console.log('Saved!');
    }); */
});
}