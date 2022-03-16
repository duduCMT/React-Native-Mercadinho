import React, { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import TitlePage from '../../components/TitlePage';
import UserItemList from '../../components/UserItemList';
import { size } from '../../global/styles';
import { UserService } from '../../service/UserService';
import { AlertUtils } from '../../utils/AlertUtils';
import styles, { Separator } from './styles';

export default function DashUsersList() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        try {
            setLoading(true)
            const response = await UserService.getAll()
            setUsers(response.data)
        } catch (error) {
            console.log(error)
            AlertUtils.showError(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <Header />

            {
                loading ? <Loading /> :
                    <FlatList
                        ListHeaderComponent={() => (
                            <TitlePage
                                title='Usuários Cadastrados'
                                subtitle='Veja os usuários que se cadastraram no sistema'
                                style={{
                                    marginBottom: size.PADDING.regular,
                                }}
                            />
                        )}

                        ItemSeparatorComponent={() => <Separator />}
                        
                        style={{
                            paddingHorizontal: size.PADDING.regular,
                            paddingBottom: size.PADDING.regular,
                        }}

                        data={users}
                        key={(item, index) => index}
                        renderItem={({ item }) => (
                            <UserItemList user={item} />
                        )}
                    />
            }

        </View>
    )
}