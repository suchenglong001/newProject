import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    InteractionManager
} from 'react-native'
import { Container, Content, List, Left, ListItem, Thumbnail, Separator, Body, Right, Icon } from 'native-base'
import { connect } from 'react-redux'
import FoundationIcon from 'react-native-vector-icons/dist/Foundation'
import { Actions } from 'react-native-router-flux'
import globalStyles from '../../GlobalStyles'
import * as demageListAction from '../demageList/DemageListAction'


const Setting = props => {
    const { getDemageListWaiting, getDemageList } = props
    return (
        <Container>
            <Content style={globalStyles.container}>
                <List style={styles.list}>
                    <Separator bordered />
                    <ListItem last onPress={Actions.personalCenter}>
                        <View style={styles.avatarContainer}>
                            <Thumbnail source={{ uri: `personalicon` }} />
                            <View style={styles.userContainer}>
                                <Text style={globalStyles.midText}>章保全</Text>
                                <Text style={globalStyles.midText}>13889000000</Text>
                            </View>
                        </View>
                    </ListItem>
                    <Separator bordered />
                    <ListItem icon onPress={() => {
                        getDemageListWaiting()
                        Actions.demageList()
                        InteractionManager.runAfterInteractions(getDemageList)
                    }}>
                        <Left>
                            <Icon name="ios-alert" style={globalStyles.styleColor} />
                        </Left>
                        <Body>
                            <Text style={globalStyles.midText}>我的质损</Text>
                        </Body>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon last onPress={Actions.responsibilityList}>
                        <Left>
                            <Icon name="ios-umbrella" style={globalStyles.styleColor} />
                        </Left>
                        <Body>
                            <Text style={globalStyles.midText}>我的责任</Text>
                        </Body>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <Separator bordered />
                    <ListItem icon>
                        <Left>
                            <Icon name="ios-cube-outline" style={globalStyles.styleColor} />
                        </Left>
                        <Body>
                            <Text style={globalStyles.midText}>版本信息：v1.0.0</Text>
                        </Body>
                        <Right>
                            <FoundationIcon name="burst-new" size={30} color={'#ff0000'} />
                        </Right>
                    </ListItem>
                    <ListItem icon onPress={Actions.updatePassword}>
                        <Left>
                            <Icon name="ios-key-outline" style={globalStyles.styleColor} />
                        </Left>
                        <Body>
                            <Text style={globalStyles.midText}>修改密码</Text>
                        </Body>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem last icon onPress={() => { }} >
                        <Left>
                            <Icon name="ios-log-out" style={globalStyles.styleColor} />
                        </Left>
                        <Body>
                            <Text style={globalStyles.midText}>退出</Text>
                        </Body>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                </List>
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: '#fff',
    },
    avatarContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    userContainer: {
        marginLeft: 10
    }
})

const mapStateToProps = (state) => {
    return {
        settingReducer: state.settingReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getDemageList: () => {
        dispatch(demageListAction.getDemageList())
    },
    getDemageListWaiting: () => {
        dispatch(demageListAction.getDemageListWaiting())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Setting)



