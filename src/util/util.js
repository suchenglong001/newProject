import { PixelRatio } from 'react-native'

export const fontSizeCoeff = PixelRatio.get() / PixelRatio.getFontScale()

export const sleep = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, time)
    })
}