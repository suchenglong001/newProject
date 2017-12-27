import React, { Component } from 'react'
import { Header, Title, Button, Icon, Right, Left, Body, Label, Item, Input, Text } from 'native-base'
import { View, StatusBar, StyleSheet, TextInput, TouchableOpacity, TouchableHighlight } from 'react-native'
import { Actions } from 'react-native-router-flux'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import globalStyles, { styleColor } from '../../../GlobalStyles'

const SearchBar = props => {
    const { title, layout } = props
    return (
        <View style={[styles.container, { width: layout.initWidth }]}>
            <StatusBar hidden={false} />
            <Header style={globalStyles.styleBackgroundColor}>
                <Left style={styles.left}>
                    <Button small transparent>
                        <Icon name="ios-qr-scanner" style={styles.leftIcon} />
                    </Button>
                </Left>
                <Body style={styles.body}>
                    <TouchableHighlight
                        underlayColor={'rgba(255, 255, 255, 0)'}
                        onPress={Actions.searchCar}
                        style={styles.bodyTouch}>
                        <View style={styles.bodyTouchChild}>
                            <View style={styles.input} >
                                <Text></Text>
                            </View>
                            <Icon name="ios-search" style={[globalStyles.textColor, styles.inputIcon]} />
                        </View>
                    </TouchableHighlight>
                </Body>
            </Header>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        top: 0
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    left: {
        flex: 1
    },
    body: {
        flex: 5
    },
    bodyTouch: {
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center'
    },
    bodyTouchChild: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 3
    },
    inputIcon: {
        paddingHorizontal: 5
    },
    input: {
        flex: 1
    },
    leftIcon: {
        color: '#fff'
    }

})

export default SearchBar