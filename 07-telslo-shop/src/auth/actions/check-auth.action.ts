import { tesloApi } from "@/api/tesloApi";
import type { LoginResponse } from "../interface/login.response";

export const checkAuthAction = async () => {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No token found');

    try {
        const { data } = await tesloApi.get<LoginResponse>('/auth/check-status');
        localStorage.setItem('token', data.token);
        return data;
    } catch (error) {
        console.log(error);
        localStorage.removeItem('token');
        throw new Error('token expired');
    }
};