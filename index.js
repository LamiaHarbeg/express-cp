const express = require('express');

const app = express();
const port = process.env.PORT || "4000";

app.use(express.static('public'))

let currentHour = new Date().getHours();
let day = new Date().getDay();
console.log(`Hour ${currentHour} `);
console.log(`Day ${day} `)

app.get('/',check ,(req,res)=>{
    res.sendFile(__dirname + '/public/home.html')
})


function check(req,res,next){
    if((currentHour>8) && (currentHour<17) && (day > 0) && (day < 6)){
        next()
    } else {
        res.sendFile(__dirname + '/public/closed.html')
    }
}



app.listen(port, (error) => {
    if (error) console.log('Server is not running')
    else console.log(`Server is running on port :${port}`)
})
