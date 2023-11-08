import axios from "axios";
export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{key:'46b9a24ae301428b8acbc23897ed8764'},
})