import React, { useState, useEffect, useContext } from 'react'
import { View, Text, ScrollView, FlatList } from 'react-native'

import CardBanner from '../../components/CardBanner'
import CategoryList from '../../components/CategoryList'
import Header from '../../components/Header'
import Loading from '../../components/Loading'
import ProductDetails from '../../components/ProductDetails'
import ProductItem from '../../components/ProductItem'
import TitlePage from '../../components/TitlePage'
import UserContext from '../../context/UserContext'

import { size } from '../../global/styles'
import { AuthService } from '../../service/AuthService'
import { ProductService } from '../../service/ProductService'
import { AlertUtils } from '../../utils/AlertUtils'
import { EmptyArea, EmptyText, LineSeparetor, MainContainer } from './styles'

const categories = [
    'Todos',
    ...ProductService.categories,
]

export default function ProductsList() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectedCategory, setSelectedCategory] = useState(categories[0])
    const [showProductsDetails, setShowProductsDetails] = useState(false)
    const [productDetail, setProductDetail] = useState()

    const { state } = useContext(UserContext)
    const user = state.user

    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() => {
        if (loading) setProducts([])
    }, [loading])

    useEffect(() => {
        if (productDetail != undefined && showProductsDetails === false) 
            setShowProductsDetails(true)
    }, [productDetail])

    useEffect(() => {
        selectedCategory === categories[0] ? getProducts() : getProductsByCategory(selectedCategory)
    }, [selectedCategory])

    const getProducts = async () => {
        try {
            setLoading(true)

            const result = await ProductService.getAll()
            setProducts(result.data)

        } catch (error) {
            console.log(error)
            AlertUtils.showError(error)

        } finally {
            setLoading(false)
        }
    }

    const getProductsByCategory = async (category) => {
        try {
            setLoading(true)

            const result = await ProductService.getByCategory(category)
            setProducts(result.data)

        } catch (error) {
            console.log(error)
            AlertUtils.showError(error)

        } finally {
            setLoading(false)
        }
    }

    const openProduct = (product) => {
        setProductDetail(product)
    }

    const addProduct = async (productId) => {
        try {
            const result = await AuthService.addToBag(user._id, productId)
            AlertUtils.showSuccess('Produto adicionado a Sacola')
        } catch (error) {
            console.log(error)
            AlertUtils.showError('O produto já está adicionado a sua sacola')
        } 
    }


    return (
        <>
            <Header />

            <FlatList
                ListHeaderComponent={() => (<>
                    <MainContainer>
                        <TitlePage
                            title={`Olá, ${user.name.split(' ')[0]}`}
                            subtitle="Vamos comprar algo hoje?"
                        />

                        <CardBanner style={{ marginTop: size.PADDING.regular }} />
                    </MainContainer>

                    <CategoryList
                        style={{
                            marginVertical: size.PADDING.regular,
                        }}
                        selected={selectedCategory}
                        categories={categories}
                        onChange={(category) => setSelectedCategory(category)}
                    />
                </>)}

                ItemSeparatorComponent={() => <LineSeparetor />}

                ListEmptyComponent={() =>
                    loading
                        ? <Loading />
                        : <EmptyArea>
                            <EmptyText>Nenhum Produto Cadastrado</EmptyText>
                        </EmptyArea>
                }

                contentContainerStyle={{
                    paddingBottom: size.PADDING.regular,
                }}
                showsVerticalScrollIndicator={false}
                numColumns={2}

                data={products}
                keyExtractor={item => item._id}

                renderItem={({ item, index }) => (
                    <ProductItem
                        onPress={(product) => openProduct(product)}
                        onAddPress={(product) => addProduct(product._id)}
                        product={item}
                        style={{
                            marginRight: index % 2 == 0 ? size.PADDING.regular : size.PADDING.regular,
                            marginLeft: index % 2 == 0 ? size.PADDING.regular : 0,
                        }}
                    />
                )}
            />

            <ProductDetails  
                visible={showProductsDetails}
                onRequestClose={() => {
                    setShowProductsDetails(!showProductsDetails)
                    setProductDetail(undefined)
                }}
                product={productDetail}
                onAddPress={(product) => { addProduct(product._id) }}
            />
        </>
    )
}