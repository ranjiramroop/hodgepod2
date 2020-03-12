import axios from "axios";
const INDIVDUALMOVIE = "https://www.omdbapi.com/?i="
const BASEURL = "https://www.omdbapi.com/?s=";
const APIKEY = "&apikey=trilogy";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  },
  movieInfo: function(query) {
    return axios.get(INDIVDUALMOVIE + query + APIKEY);
  }
  
};