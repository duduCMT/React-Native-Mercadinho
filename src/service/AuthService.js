import axios from "axios"
import { BASE_URL } from "./values"

export const AuthService = {
    signup: (user) => axios.post(`${BASE_URL}/signup`, user),
    signin: (email, password) => axios.post(`${BASE_URL}/signin`, {email, password}),

    addToBag: (userId, productId) => axios.post(`${BASE_URL}/user/bag`, { productId, userId }),
    getProductsInBag: (id) => axios.get(`${BASE_URL}/user/bag/${id}`),
    removeProductsInBag: (userId, productId) => axios.delete(`${BASE_URL}/user/bag`, {data: { userId, productId }}),
    buyProductsInBag: (userId) => axios.post(`${BASE_URL}/user/bag/buy`, { userId })

 }