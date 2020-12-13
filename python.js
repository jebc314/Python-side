let {PythonShell} = require('python-shell')
const express = require('express')
const app = express()
const port = process.env.PORT || 8080
app.use(function(req, res, next) {
  //res.header("Access-Control-Allow-Origin", "*");
  //res.header("Access-Control-Allow-Origin", "X-Requested-With");
  response.setHeader("Access-Control-Allow-Origin", "*");
response.setHeader("Access-Control-Allow-Credentials", "true");
response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  next();
});

app.get('/:information', (req, res) => {
    var information_array = (""+req.params.information).split(", ");
    console.log(""+req.params.information);
    var int_array = [];

    for (let i = 0; i<information_array.length; i++)
    {
      int_array.push(parseInt(information_array[i]));
    }

    console.log(int_array);

    let options = {
      args: int_array
    }

    PythonShell.run('decisiontree.py', options, function (err, result) {
        console.log(err);
        console.log(result);
        res.send(result);
    })
 
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))