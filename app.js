const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.json({
        mesg:'Hello Aliciah Hill, We have been expecting you.'
    })
})

app.listen(3000)
