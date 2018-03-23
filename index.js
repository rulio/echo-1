module.exports = (req, res) => {
  console.log('APP')
  var data = {};
  Object.keys(req.headers).forEach(function(key){
    data[key] = req.headers[key]
  })
  res.end(JSON.stringify(data)) ;
}
