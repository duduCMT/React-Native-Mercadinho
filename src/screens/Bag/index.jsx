import React, { useState, useEffect, useContext } from 'react'
import { View, Text, FlatList } from 'react-native'

import EmptySvg from '../../assets/svg/empty-cart'
import BagBuyButton from '../../components/BagBuyButton'
import BagItem from '../../components/BagItem'
import Header from '../../components/Header'
import Loading from '../../components/Loading'
import TitlePage from '../../components/TitlePage'
import UserContext from '../../context/UserContext'

import { size } from '../../global/styles'
import { AuthService } from '../../service/AuthService'
import { ProductService } from '../../service/ProductService'
import { AlertUtils } from '../../utils/AlertUtils'
import { UserBagUtils } from '../../utils/UserBagUtils'
import { Divider, EmptyBag, EmptyBagText, MainContainer } from './styles'

export default function Bag() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { state } = useContext(UserContext)
    const user = state.user

    useEffect(() => {
        getProductsInBag()
    }, [])

    const getProductsInBag = async () => {
        try {
            setLoading(true)

            const result = await AuthService.getProductsInBag(user._id)
            const userBag = result.data

            const bag = await UserBagUtils.mountUserBag(userBag)

            setProducts(bag)

        } catch (error) {
            console.log(error)
            AlertUtils.showError(error)

        } finally {
            setLoading(false)
        }
    }

    const removeProductInBag = async (item) => {
        try {
            console.log(user._id)
            const result = await AuthService.removeProductsInBag(user._id, item.product._id)
            console.log(result)
            getProductsInBag()

        } catch (error) {
            console.log(error)
            AlertUtils.showError(error)

        }
    }

    const buy = async () => {
        try {
            console.log(user._id)
            const result = await AuthService.buyProductsInBag(user._id)
            console.log(result)
            getProductsInBag()

            AlertUtils.showSuccess('Compra finalizada com sucesso!')

        } catch (error) {
            console.log(error)
            AlertUtils.showError(error)
        }
    }

    const calcularTotal = () => {
        let total = 0
        products.forEach(({ amount, product }) => {
            total = total + (amount * product.price)
        })
        return total;
    }



    return (
        <>
            <Header />
            <MainContainer>
                <TitlePage
                    title="Minha Sacola"
                    subtitle="Hora de finalizar sua compra!"
                />
            </MainContainer>

            {
                !loading && products.length === 0 && (
                    <EmptyBag>
                        <EmptySvg
                            width={size.SCREEN.width}
                            height={size.create(172)}
                        />
                        <EmptyBagText>Nenhum produto adicionado ainda</EmptyBagText>
                    </EmptyBag>
                )
            }

            { loading && <Loading />}

            {
                products.length !== 0 && (
                    <FlatList
                        ItemSeparatorComponent={() => <Divider />}

                        contentContainerStyle={{
                            paddingHorizontal: size.PADDING.regular,
                            paddingTop: size.PADDING.regular,
                        }}

                        data={products}
                        keyExtractor={(item) => item.product._id}
                        renderItem={({ item }) => (
                            <BagItem
                                item={item}
                                onRemovePress={(itemToRemove) => removeProductInBag(itemToRemove)}
                            />
                        )}
                    />
                )
            }

            {!loading && products.length !== 0 && <BagBuyButton total={calcularTotal()} onPress={() => buy()} />}
        </>
    )
}