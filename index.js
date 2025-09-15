const express = require("express");
const reasons = require("./reasons.json");

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/',(req,res) =>{
    res.json({
        message: "You are in the right place but, try /api/reason to get your reasons"
    });
});

app.get('/api/reason',(req,res) =>{
    try {
        const random = Math.floor(Math.random()*reasons.length);
        res.json({
            message: reasons[random]
        });
    } catch (error) {
        res.json({
            message: "Because you are you and no one else can be you"
        });
    }
});

app.listen(PORT,()=>{
    console.log(`Reasons API running on port ${PORT}`);

})