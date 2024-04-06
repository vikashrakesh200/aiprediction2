const express = require('express')
let {ResultData,getData,last11Data,getSuborddinate} = require("./modules");
let result;
//let db = connection;
const router = express.Router()
   setInterval(async () => {
    try {
        result = await getData();
        console.log("result:",result); // Handle the result here
    } catch (error) {
        console.error('Error occurred:', error);
    }
}, 60000);    

 router.get('/guessing', (req, res) => {
   res.send(result)
});

router.get('/suborddinate', async(req, res) => {
   let result = await getSuborddinate()
  
 });


module.exports = router;