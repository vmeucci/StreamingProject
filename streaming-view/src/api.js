import axios from "axios";

export default axios.create({
    baseURL: "localhost:8081",
    header:{
        Accept: "application/json",
        "Content-type": "application/json",
    },
});