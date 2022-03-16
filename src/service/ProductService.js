import axios from "axios"
import { BASE_URL } from "./values"

export const ProductService = {
    getAll: () => axios.get(`${BASE_URL}/product`),
    getById: (id) => axios.get(`${BASE_URL}/product/${id}`),
    getByCategory: (category) => axios.post(`${BASE_URL}/products/category`, { category }),

    add: (product) => axios.post(`${BASE_URL}/product`, product),

    update: (id, product) => axios.put(`${BASE_URL}/product/${id}`, product),

    remove: (id) => axios.delete(`${BASE_URL}/product/${id}`),

    categories: [
        'Alimentação',
        'Higiene',
        'Limpeza',
        'Congelados',
    ]
}