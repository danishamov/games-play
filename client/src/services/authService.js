import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/users/login";

export const login = async (email, password) => {
    const result = await request.post(baseUrl, { email, password });

    return result;
};
