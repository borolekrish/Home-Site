import axios from "axios";
import { toast } from "react-toastify";
import dayjs from "dayjs";

export const api = axios.create({
    baseURL: "http://localhost:8000/api",
})

export const getProperties = async () => {
    try {
        const response = await api.get("/residency/allresidency", {
            timeout: 10 * 1000,
        });
        if (response.status === 400 || response.status === 500) {
            throw response.data;
        }
        return response.data;
    }
    catch (error) {
        toast.error(error.message);
        throw error;
    }
}