import { API_CONFIG } from "../config"
import request from "../api"

export const login = (username, password) => {
    return request(API_CONFIG.loginApi, { username, password }, "post", "2000")
}