export interface User{
    _id: string;
    email: string;
    username: string,
    password: string,
    createdMyths: string[];
}

export interface UserAuth{
    _id: string;
    email: string;
    username: string;
    password: string;
    confirmPassword: string
}

export interface UserBasic{
    _id: string;
    email: string;
    username: string;
}

