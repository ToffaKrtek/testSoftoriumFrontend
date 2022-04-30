var axios = require('axios');


//PROTOCOL = location.protocol;
PROTOCOL = "http:";
URL = "194.67.74.67";
//PORT = location.port == 80 ? '' : ":" + location.port;
PORT = ":80";
axios.defaults.baseURL = PROTOCOL+'//'+ URL + PORT;
