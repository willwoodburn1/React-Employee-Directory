import axios from "axios";
const BASEURL = "https://randomuser.me/api/?inc=id,name,email,dob,picture,gender&results=20&nat=us";

export default {
    search: function (query) {
        return axios.get(BASEURL);
    }
};