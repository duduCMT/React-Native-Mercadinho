import React from 'react'
import { FlatList } from 'react-native'
import { size } from '../../global/styles';
import { CategoryDivider, CategoryItem, CategoryText } from './styles';

export default function CategoryList({categories, selected, onChange, style}){
    const onSelected = (category) => {
        onChange(category)
    }

    return (
        <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            style={style}
            data={categories}
            keyExtractor={(item, index) => index}
            contentContainerStyle={{
                paddingHorizontal: size.PADDING.regular,
            }}
            ItemSeparatorComponent={() => <CategoryDivider />}
            renderItem={({item}) => (
                <CategoryItem onPress={() => onSelected(item)} selected={item === selected} activeOpacity={0.8}>
                    <CategoryText selected={item === selected}>{item}</CategoryText>
                </CategoryItem>
            )}
        />
    )
}