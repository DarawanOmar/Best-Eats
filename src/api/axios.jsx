import axios from "axios";

export const api = axios.create({
    baseURL :  "http://localhost:3500"
})

export const getData = async () => {
    const res = await api.get(`/data`);
    return res.data;
}
export const getDatacategories = async () => {
    const res = await api.get(`/categories`);
    return res.data;
}

