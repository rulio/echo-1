module.exports = (req, res) => {
  console.log('APP')
  var data = {};
  Object.keys(req.headers).forEach(function(key){
    data[key] = req.headers[key]
  })
  if(data.hasOwnProperty('host') && req.headers.hasOwnProperty('x-forwarded-host')){
    data['host'] = req.headers['x-forwarded-host'];
  }
  res.end(JSON.stringify(data));
}
