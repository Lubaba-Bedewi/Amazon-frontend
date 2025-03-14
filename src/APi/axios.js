import axios from "axios";

const instance = axios.create({
    // baseURL: "http://127.0.0.1:5001/clone-a5747/us-central1/api",
    baseURL: "https://amazon-api-i48k.onrender.com",
});

export { instance };