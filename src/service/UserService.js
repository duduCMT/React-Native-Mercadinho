import axios from "axios"
import { BASE_URL } from "./values"

export const UserService = {
    getAll: () => axios.get(`${BASE_URL}/users`),
}