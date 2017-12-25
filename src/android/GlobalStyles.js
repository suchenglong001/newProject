import {
    StyleSheet
} from 'react-native'
import { fontSizeCoeff } from '../util/util'

const globalStyles = StyleSheet.create({
    container: {
        backgroundColor: '#F0EFF5'
    },
    styleColor: {
        color: '#36759e'
    },
    styleBackgroundColor: {
        backgroundColor: '#36759e'     
    },
    midText: {
        fontSize: 5 * fontSizeCoeff,
        color: '#777'
    },
    smallText: {
        fontSize: 4 * fontSizeCoeff,
        color: '#777'
    },
    largeText:{
        fontSize: 6 * fontSizeCoeff,
        color: '#777'
    },
    xlText:{
        fontSize: 7 * fontSizeCoeff,
        color: '#777'
    }
})

export default globalStyles