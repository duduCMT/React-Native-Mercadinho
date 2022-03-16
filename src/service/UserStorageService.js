import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserStorageService = {
    addUser: async (email, password) => AsyncStorage.setItem('@user_data', JSON.stringify({email, password})),
    removeUser: async () => AsyncStorage.removeItem('@user_data'),
    readUser: async () => {
        const jsonValue = await AsyncStorage.getItem('@user_data')
        return jsonValue !== null ? JSON.parse(jsonValue) : null  
    }
}