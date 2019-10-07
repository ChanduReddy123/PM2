var express = require('express');
var userapp = express();
var axios = require('axios');
console.log(process.env.NODE_ENV);
// const port = process.env.PORT;
const port = 3000;

userapp.get('/test',function(req,res){
    res.send("Deployed the latest changes now")
})

userapp.get('/json',async(req,res) => {
    let url = "https://jsonplaceholder.typicode.com/posts"
    if(req.query.id){
    url+='?id='+req.query.id
    }
    let output = await getData(url)
    res.send(output)
})

userapp.get('/update',(req,res) => {
    console.log("new featue");
    res.send("This is really cool")
})


userapp.listen(port,() => {
    console.log("Successfully started the server");
    console.log(`It is listening on port ${port}`);
});


async function getData(endpoint){
    let response;
    console.log('in response');
    try{
        response = await axios.get(endpoint)
    }
    catch(error){
        console.log(error);
    }
    console.log(response);
    return response.data;

}
