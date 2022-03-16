import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const { width, height } = Dimensions.get('window')

const create = (size) => RFValue(size, 586)

export default {

    create,

    SCREEN: {
        width,
        height,
    },

    FONT_SIZE: {
        tiny: create(10),
        small: create(12), 
        regular: create(14),
        medium: create(18),
        big: create(24),
    },

    PADDING: { 
        small: create(8),
        regular: create(16),
        big: create(24),
    },

    BORDER_RADIUS: {
        small: create(8),
        regular: create(16),
        big: create(18),
    },
}