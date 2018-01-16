import React, { Component } from 'react'
import { Text, View, StatusBar, StyleSheet } from 'react-native'
import { Header, Title, Button, Icon, Right, Left, Body, Label } from 'native-base'
import { Actions } from 'react-native-router-flux'
import globalStyles, { styleColor } from '../../../GlobalStyles'

const NavBar = props => {
    const { title, layout, RightButton, LeftButton, parent } = props
    return (
        <View style={[styles.container, { width: layout.initWidth }]}>
            <StatusBar hidden={false} />
            <Header
                androidStatusBarColor={styleColor}
                style={[styles.header, globalStyles.styleBackgroundColor]}>
                {LeftButton && <Left>
                    <LeftButton />
                </Left>}
                <Body>
                    <Title style={[globalStyles.largeText, { color: '#fff' }]}>{title}</Title>
                </Body>
                <Right>
                    {RightButton && <RightButton parent={parent} />}
                </Right>
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

export default NavBar