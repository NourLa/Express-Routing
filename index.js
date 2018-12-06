const express = require('express')
const app = express()
const port = 3000
app.use(express.static(__dirname+'/PAGES-HTML'))
controldate = (req,res,next)=>
{
    let hours= new Date().getHours()
    if (hours > 17 || hours < 8)
{    res.send("Our office is not open now");}
next();
}
app.get('/', (req, res) =>res.redirect('/home'))

app.get('/home',controldate, (req, res) => res.sendfile('C:/Users/hp/Desktop/PROJET GO MY CODE/Express-Routing/Pages-HTML/Home.html'))
app.get('/Contact',controldate, (req, res) => res.sendFile('C:/Users/hp/Desktop/PROJET GO MY CODE/Express-Routing/Pages-HTML/contact.html'))
app.get('/OurServices',controldate, (req, res) => res.sendFile('C:/Users/hp/Desktop/PROJET GO MY CODE/Express-Routing/Pages-HTML/OursServices.html'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))