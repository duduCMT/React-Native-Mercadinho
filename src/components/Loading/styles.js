import styled from "styled-components/native";
import { ActivityIndicator } from 'react-native'
import { colors } from "../../global/styles";

export const LoadingComponent = styled(ActivityIndicator).attrs({
    size: 'large',    
    color: colors.primary,    
})`
` 

export const LoadingContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
` 