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
import * as responsibilityListAction from '../responsibilityList/ResponsibilityListAction'
import { file_host } from '../../../config/Host'

const Setting = props => {
    const { getDemageListWaiting,
        getDemageList,
        getResponsibilityListWaiting,
        getResponsibilityList,
        loginReducer: { data: { user: { real_name, avatar_image, mobile } } } } = props
    return (
        <Container>
            <Content style={globalStyles.container}>
                <List style={styles.list}>
                    <Separator bordered />
                    <ListItem last onPress={Actions.personalCenter}>
                        <View style={styles.avatarContainer}>
                            <Thumbnail source={avatar_image ? { uri: `${file_host}/image/${avatar_image}` } : { uri: `personalicon` }} />
                            <View style={styles.userContainer}>
                                <Text style={globalStyles.midText}>{real_name ? `${real_name}` : ''}</Text>
                                <Text style={globalStyles.midText}>{mobile ? `${mobile}` : ''}</Text>
                            </View>
                        </View>
                    </ListItem>
                    <Separator bordered />
                    <ListItem icon onPress={() => {
                        getDemageListWaiting()
                        Actions.demageList()
                        InteractionManager.runAfterInteractions(() => {
                            getDemageList()
                        })
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
                    <ListItem icon last onPress={() => {
                        getResponsibilityListWaiting()
                        Actions.responsibilityList()
                        InteractionManager.runAfterInteractions(() => {
                            getResponsibilityList()
                        })
                    }}>
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
        loginReducer: state.loginReducer,
        settingReducer: state.settingReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getDemageList: () => {
        dispatch(demageListAction.getDemageList())
    },
    getDemageListWaiting: () => {
        dispatch(demageListAction.getDemageListWaiting())
    },
    getResponsibilityList: () => {
        dispatch(responsibilityListAction.getResponsibilityList())
    },
    getResponsibilityListWaiting: () => {
        dispatch(responsibilityListAction.getResponsibilityListWaiting())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Setting)



