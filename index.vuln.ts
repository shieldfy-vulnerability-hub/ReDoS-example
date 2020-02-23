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


const Vulnerability1 = (req, res) => {
    
    const regex1 = RegExp('(x+x+)+y','g');
    const str1 = req.body.msg;

    let matchedStrings = regex1.exec(str1);
    res.end(matchedStrings)
}

const Vulnerability2 = (req, res) => {
    
    const regex1 = RegExp(req.body.word,'g');
    const str1 = 'table football, foosball';

    let matchedStrings = regex1.exec(str1);
    res.end(matchedStrings)
}

const Vulnerability3 = (req, res) => {
    
    const regex1 = RegExp('(x+x+)+y','g');
    const str1 = 'table football, foosball';

    let matchedStrings = regex1.exec(str1);
    res.end(matchedStrings)
}
    
app.get('/vuln1', Vulnerability1);
app.get('/vuln2', Vulnerability2);
app.get('/vuln3', Vulnerability3);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))