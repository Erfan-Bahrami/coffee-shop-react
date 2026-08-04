import axios from "axios";

const api = axios.create({
   baseURL: "https://coffee-shop-api-ka5h.onrender.com",
    headers:{
        "Content-Type":"application/json",
    }
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token")

        if(token) {
             config.headers.Authorization = `Bearer ${token}`;
        }
        return config
    },
     (error) => Promise.reject(error)
)

export default api;