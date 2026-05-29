import { tesloApi } from "@/api/tesloApi";
import type { LoginResponse } from "../interface/login.response";



export const loginAction = async (email: string, password: string): Promise<LoginResponse> => {

    try {
        const { data } = await tesloApi.post<LoginResponse>('/auth/login', { email, password });

        return data;

    } catch (error) {
        console.log(error);
        throw error;
    }

};