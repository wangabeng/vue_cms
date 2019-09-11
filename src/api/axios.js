import {BASEURL} from "src/api/config.js"
import axios from 'axios'
axios.defaults.baseURL = BASEURL;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default axios