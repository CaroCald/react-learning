import type { User } from "@/interfaces/user.interface";

export interface LoginResponse {
    user: User;
    token: string;
}

