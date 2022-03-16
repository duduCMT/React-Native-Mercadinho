import { ProductService } from "../service/ProductService"

export const ProductsUtils = {
    orderByCategory: (products) => {
        let finalList = []

        ProductService.categories.forEach(category => {
            const data = products.filter(item =>
                item.category === category
            )

            if (data.length > 0) {
                finalList.push({ category, data })
            }
        })

        return finalList
    }
}