import axios from 'axios'


const api = axios.create({
    baseURL:'192.168.0.62:3350'
    //baseURL:'192.168.0.62:3333'
});
export default api; 
