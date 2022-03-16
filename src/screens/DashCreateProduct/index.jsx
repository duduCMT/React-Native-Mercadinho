import React, { useState, useRef } from 'react'
import { ScrollView, KeyboardAvoidingView } from 'react-native'

import Header from '../../components/Header'
import TitlePage from '../../components/TitlePage'
import TextField from '../../components/TextField'
import Button from '../../components/Button'
import Select from '../../components/Select'

import { ButtonArea, ContainerForm } from './styles'
import { size } from '../../global/styles'
import { ProductService } from '../../service/ProductService'
import { AlertUtils } from '../../utils/AlertUtils'

const initialValues = {
    name: '',
    category: ProductService.categories[0],
    description: '',
    image: '',
    price: '',
}


export default function DashCreateProduct() {
    const [name, setName] = useState(initialValues.name)
    const [category, setCategory] = useState(initialValues.category)
    const [description, setDescription] = useState(initialValues.description)
    const [image, setImage] = useState(initialValues.image)
    const [price, setPrice] = useState(initialValues.price)

    const refName = useRef()
    const refDescription = useRef()
    const refImage = useRef()
    const refPrice = useRef()

    const handleAddProduct = async () => {
        try {
            if(!name || !category || !description || !image || !price){
                throw new Error('Informações incompletas. Verifique e tente novamente.')
            }

            const response = await ProductService.add({
                name,
                category,
                desc: description,
                image,
                price
            })    

            const product = response.data

            AlertUtils.showSuccess('Produto adicionado com sucesso.')
            
            setName(initialValues.name)
            setCategory(initialValues.category)
            setDescription(initialValues.description)
            setImage(initialValues.image)
            setPrice(initialValues.price) 

        } catch(error){
            console.log(error)
            AlertUtils.showError(error)
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <Header />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: size.PADDING.regular,
                }}
            >
                <ContainerForm>
                    <TitlePage
                        title="Cadastrar Novo Produto"
                        subtitle="Preencha as informações de cadastro"
                        style={{ marginBottom: size.PADDING.regular }}
                    />

                    <TextField
                        label='Nome'
                        textInputRef={refName}
                        onSubmitEditing={() => refDescription.current.focus()}
                        value={name}
                        onChangeText={(value) => setName(value)}
                        style={{ marginBottom: size.PADDING.small }}
                    />
                    <Select
                        label='Categoria'
                        selectionTitle='Selecionar Categoria'
                        value={category}
                        options={ProductService.categories}
                        onSelectOption={option => setCategory(option)}
                        style={{ marginBottom: size.PADDING.small }}
                    />
                    <TextField
                        label='Descrição'
                        multiline={true}
                        numberOfLines={6}
                        textInputRef={refDescription}
                        onSubmitEditing={() => refImage.current.focus()}
                        value={description}
                        onChangeText={(value) => setDescription(value)}
                        style={{ marginBottom: size.PADDING.small }}
                    />
                    <TextField
                        label='Imagem (URL)'
                        autoCorrect={false}
                        textInputRef={refImage}
                        onSubmitEditing={() => refPrice.current.focus()}
                        value={image}
                        onChangeText={(value) => setImage(value)}
                        style={{ marginBottom: size.PADDING.small }}
                    />
                    <TextField
                        label='Preço'
                        keyboardType="numeric"
                        value={price}
                        textInputRef={refPrice}
                        onSubmitEditing={() => handleAddProduct()}
                        onChangeText={(value) => setPrice(value)}
                        style={{ marginBottom: size.PADDING.small }}
                    />

                    <ButtonArea>
                        <Button
                            title="Cadastrar Produto"
                            type="dark"
                            onPress={handleAddProduct}
                        />
                    </ButtonArea>
                </ContainerForm>
            </ScrollView>
        </KeyboardAvoidingView>

    )
}