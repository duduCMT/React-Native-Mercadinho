import { Platform } from 'react-native'

export const BASE_URL =  Platform.OS === 'ios' ? 'http://localhost:3200' : 'http://192.168.0.108:3200'