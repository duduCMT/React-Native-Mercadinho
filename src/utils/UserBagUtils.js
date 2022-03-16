import { ProductService } from "../service/ProductService"

export const UserBagUtils = {
    mountUserBag: (userBag) => new Promise(async (resolve, reject) => {
        let userProducts = []
    
        for (const datas of userBag) {
            const { productId, amount } = datas
            try {
                const product = await ProductService.getById(productId)
                userProducts.push({
                    product: product.data,
                    amount,
                })
            } catch (error) {
                console.log(error)
                reject('Produto não encontrado na sacola.')
            }   
        }
        
        resolve(userProducts)
    })
} 