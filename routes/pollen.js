var express = require('express');
var axios = require("axios").default;
var router = express.Router();

/* GET pollen listing. */
router.post('/', function(req, res, next) {
  /* API to GET pollen by place. */
  console.log(req.body)
  var pollenPlace = {
    method: 'GET',
    url: 'https://api.ambeedata.com/latest/pollen/by-place',
    params: {place: req.body.value },
    headers: {'x-api-key': '5e552db9ddf4a0e307958dc2719ba5ea2f1e3de42e8f96b689799b5f221f7aef', 'Content-type': 'application/json'}
  };
  axios.request(pollenPlace).then(function (response) {
    console.log("Pollen Place");
    console.log(response.data.data);
    res.send(response.data.data);
  }).catch(function (error) {
    console.error(error);
  });
});

module.exports = router;