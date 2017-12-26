import React, { Component } from 'react'
import { Header, Title, Button, Icon } from 'native-base'
import { View, StatusBar, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import globalStyles, { styleColor } from '../../../GlobalStyles'

const SearchBar = props => {
    const { title, layout } = props
    return (
        <View style={[styles.container, { width: layout.initWidth }]}>
            <StatusBar hidden={false}/>
            <Header
                androidStatusBarColor={styleColor}
                style={[styles.header, globalStyles.styleBackgroundColor]}>
                <Title>{title}</Title>
            </Header>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        top: 0,
        backgroundColor: '#fff'
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default SearchBar