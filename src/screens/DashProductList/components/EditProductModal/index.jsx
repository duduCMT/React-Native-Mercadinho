import React, { useState, useRef, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'

import BaseBottomModal from '../../../../components/BaseBottomModal'
import Button from '../../../../components/Button'
import Select from '../../../../components/Select'
import TextField from '../../../../components/TextField'
import { size } from '../../../../global/styles'

import { ProductService } from '../../../../service/ProductService'
import { AlertUtils } from '../../../../utils/AlertUtils'
import { ButtonArea, ModalTitle } from './styles'


export default function EditProductModal({ visible = false, onRequestClose, product}) {
    const [productValue, setProduct] = useState(product)

    const refName = useRef()
    const refDescription = useRef()
    const refImage = useRef()
    const refPrice = useRef()

    useEffect(() => {
        setProduct(product)    
    }, [product])

    const updateProduct = async () => {
        try {
            const {name, category, desc, image, price} = productValue

            if(!name || !category || !desc || !image || !price){
                throw new Error('Dados incompletos! Verifique e tente novamente.')
            }

            await ProductService.update(productValue._id, {
                name,
                category,
                desc,
                image,
                price
            })
            AlertUtils.showSuccess('Produto Atualizado com Sucesso!')
            onRequestClose()
        } catch(error){
            console.log(error)
            AlertUtils.showError(error)
        }
    }

    return (
        <BaseBottomModal
            visible={visible}
            onRequestClose={onRequestClose}
        >
            <ButtonArea>
                <ModalTitle>Editar Produtos</ModalTitle>
                <Button 
                    title='Salvar'
                    onPress={updateProduct}
                />
            </ButtonArea>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: size.PADDING.big,
                }}
            >
                <TextField
                    label='Nome'
                    textInputRef={refName}
                    onSubmitEditing={() => refDescription.current.focus()}
                    value={productValue.name}
                    onChangeText={(name) => setProduct({...productValue, name})}
                    style={{ marginBottom: size.PADDING.small }}
                />
                <Select
                    label='Categoria'
                    selectionTitle='Selecionar Categoria'
                    options={ProductService.categories}
                    value={productValue.category}
                    onSelectOption={(category) => setProduct({...productValue, category})}
                    style={{ marginBottom: size.PADDING.small }}
                />
                <TextField
                    label='Descrição'
                    multiline={true}
                    numberOfLines={6}
                    textInputRef={refDescription}
                    onSubmitEditing={() => refImage.current.focus()}
                    value={productValue.desc}
                    onChangeText={(desc) => setProduct({...productValue, desc})}
                    style={{ marginBottom: size.PADDING.small }}
                />
                <TextField
                    label='Imagem (URL)'
                    autoCorrect={false}
                    textInputRef={refImage}
                    onSubmitEditing={() => refPrice.current.focus()}
                    value={productValue.image}
                    onChangeText={(image) => setProduct({...productValue, image})}
                    style={{ marginBottom: size.PADDING.small }}
                />
                <TextField
                    label='Preço'
                    keyboardType="numeric"
                    value={`${productValue.price}`}
                    onChangeText={(price) => setProduct({...productValue, price})}
                    textInputRef={refPrice}
                    onSubmitEditing={() => handleAddProduct()}
                    style={{ marginBottom: size.PADDING.small }}
                />
            </ScrollView>
        </BaseBottomModal>
    )
}