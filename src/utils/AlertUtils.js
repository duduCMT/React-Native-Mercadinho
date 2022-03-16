import { Alert } from 'react-native'

function showError(err){
    Alert.alert('Erro', `Ocorreu o erro: ${err}`)
}

function showSuccess(msg, onDismiss){
    Alert.alert('Sucesso', `${msg}`, undefined, {
        onDismiss: () => onDismiss()
    })
}

export const AlertUtils = {
    showSuccess,
    showError,
}