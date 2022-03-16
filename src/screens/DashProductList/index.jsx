import React, { useContext, useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'

import DashProductItem from '../../components/DashProductItem'
import Header from '../../components/Header'
import Loading from '../../components/Loading'
import TitlePage from '../../components/TitlePage'
import BaseBottomModal from '../../components/BaseBottomModal'
import UserContext from '../../context/UserContext'

import { size } from '../../global/styles'

import { ProductService } from '../../service/ProductService'

import { AlertUtils } from '../../utils/AlertUtils'
import { EmptyListContainer, EmptyListText, ContainerTitle } from './styles'
import EditProductModal from './components/EditProductModal'
import LogoutButton from '../../components/LogoutButton'
import CategoryList from '../../components/CategoryList'

const categories = [
    'Todos',
    ...ProductService.categories
]

export default function DashProductList() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [modalEdit, setModalEdit] = useState(false)
    const [productToEdit, setProductToEdit] = useState({})
    const [categorySelected, setCategorySelected] = useState(categories[0])

    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() => {
        if(categorySelected === categories[0]){
            getProducts()
        } else {
            getProductsByCategory(categorySelected)
        }
    }, [categorySelected])

    const getProducts = async () => {
        try {
            setLoading(true)

            const result = await ProductService.getAll()

            // let finalList = ProductsUtils.orderByCategory(result.data)

            setProducts(result.data)

        } catch (error) {
            console.log(error)
            AlertUtils.showError(error)

        } finally {
            setLoading(false)
        }
    }

    const removeProduct = async (id) => {
        try {
            const result = await ProductService.remove(id)
            AlertUtils.showSuccess('Produto removido com sucesso.', () => getProducts())

        } catch (error) {
            console.log(error)
            AlertUtils.showError(error)
        }
    }

    const editProduct = (product) => {
        setProductToEdit(product)
        setModalEdit(true)
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

    return (
        <View style={{ flex: 1 }}>
            <Header
                rightButton={() => <LogoutButton />}
            />

            <ContainerTitle>
                <TitlePage
                    style={{ marginBottom: size.PADDING.regular }}
                    title='Produtos Cadastrados'
                    subtitle='Clique em um produto para editar as informações'
                />
            </ContainerTitle>


            <CategoryList
                categories={categories}
                selected={categorySelected}
                onChange={category => setCategorySelected(category)}
                style={{
                    maxHeight: size.create(32),
                    marginBottom: size.PADDING.regular,
                }}
            />


            {
                loading ? <Loading /> :
                    <>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={
                                products.length === 0
                                    ? { flex: 1 }
                                    : { paddingHorizontal: size.PADDING.regular }
                            }
                            data={products}
                            keyExtractor={(item, index) => item._id}
                            ListEmptyComponent={() =>
                                <EmptyListContainer>
                                    <EmptyListText>
                                        Nenhum produto cadastrado
                                    </EmptyListText>
                                </EmptyListContainer>
                            }
                            renderItem={({ item }) => (
                                <DashProductItem
                                    product={item}
                                    style={{ marginBottom: 8 }}
                                    onPress={(product) => editProduct(product)}
                                    onRemovePress={(product) => removeProduct(product._id)}
                                />
                            )}
                        />
                    </>

            }


            <EditProductModal
                visible={modalEdit}
                onRequestClose={() => {
                    if (modalEdit === true) {
                        if(categorySelected !== categories[0]){
                            getProductsByCategory(categorySelected)
                        } else {
                            getProducts()
                        }
                    }
                    setModalEdit(!modalEdit)
                }}
                product={productToEdit}
            />

        </View>
    )
}