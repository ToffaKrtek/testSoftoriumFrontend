var axios = require('axios');


//PROTOCOL = location.protocol;
PROTOCOL = "http:";
URL = "localhost";
//PORT = location.port == 80 ? '' : ":" + location.port;
PORT = ":80";
axios.defaults.baseURL = PROTOCOL+'//'+ URL + PORT;
