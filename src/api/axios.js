import {BASEURL} from "src/api/config.js"
import axios from 'axios'
axios.defaults.baseURL = BASEURL;
// axios.defaults.withCredentials = true; // 携带cookie 记录session
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default axios