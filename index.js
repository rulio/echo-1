module.exports = (req, res) => {
  var data = {};
  Object.keys(req.headers).forEach(function(key){
    data[key] = req.headers[key]
  })
  return data;
}
