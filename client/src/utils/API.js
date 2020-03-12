import axios from "axios";
const BASEURL = "https://listen-api.listennotes.com/api/v2/search?q=";
const APIKEY = "022dcf8bc974dc5a27989ed9f2792c4";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
