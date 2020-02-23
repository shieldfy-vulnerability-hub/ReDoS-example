import express from "express";
import helmet from "helmet";
import bodyParser from "body-parser";
 
let app = express()

app.use(helmet())
app.use(helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", 'maxcdn.bootstrapcdn.com']
    }
  }))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

const port = 3000

const safe1 = (req, res) => {
    
    const regex1 = RegExp('hello world','g');
    const str1 = req.body.msg;

    let matchedStrings = regex1.exec(str1);
    res.end(matchedStrings)
}
    
app.get('/safe1', safe1);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))