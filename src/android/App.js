import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import { Button, Icon, Label } from 'native-base'
import { fontSizeCoeff } from '../util/util'
import { Scene, TabBar, Router, ActionConst, Actions, Switch, Reducer } from 'react-native-router-flux'

import NavBar from './components/share/bar/NavBar'
import TabIcon from './components/share/TabIcon'
import LeftButton from './components/share/bar/LeftButton'
import ApplyDamageSubmit from './components/applyDamage/submit/ApplyDamageSubmit'

import Home from './views/home/Home'
import Setting from './views/setting/Setting'
import UpdatePassword from './views/updatePassword/UpdatePassword'
import PersonalCenter from './views/personalCenter/PersonalCenter'
import CarInfo from './views/carInfo/CarInfo'
import ApplyDamage from './views/applyDamage/ApplyDamage'
import ApplyDamageUploadImage from './views/applyDamageUploadImage/ApplyDamageUploadImage'
import Login from './views/login/Login'
import Initialization from './views/initialization/Initialization'


const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: '#ccc',
    },
    tabBarSelectedItemStyle: {
        backgroundColor: '#ccc',
    }
})

const getSceneStyle = (/* NavigationSceneRendererProps */ props, computedProps) => {
    const style = {
        flex: 1,
        backgroundColor: '#fff',
        shadowColor: null,
        shadowOffset: null,
        shadowOpacity: null,
        shadowRadius: null,
    }
    if (computedProps.isActive) {
        style.marginTop = computedProps.hideNavBar ? 0 : 56
        style.marginBottom = computedProps.hideTabBar ? 0 : 50
    }
    return style
}

export default class App extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <Router getSceneStyle={getSceneStyle}>
                <Scene key="root">
                    <Scene
                        key="main"
                        tabs={true}
                        tabBarStyle={styles.tabBarStyle}
                        tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}>
                        <Scene
                            key="homeBlock"
                            initial={true}
                            icon={TabIcon}
                            online='ios-home'
                            outline='ios-home-outline' >
                            <Scene
                                key="home"
                                component={Home}
                                title='首页'
                                initial={true}
                                hideNavBar={false}
                                navBar={NavBar} />
                            <Scene
                                key="carInfo"
                                component={CarInfo}
                                LeftButton={LeftButton}
                                title='车辆信息'
                                hideNavBar={false}
                                hideTabBar
                                navBar={NavBar} />
                            <Scene
                                key="applyDamage"
                                component={ApplyDamage}
                                LeftButton={LeftButton}
                                RightButton={ApplyDamageSubmit}
                                title='质损申请'
                                hideTabBar
                                hideNavBar={false}
                                navBar={NavBar} />
                            <Scene
                                key="applyDamageUploadImage"
                                component={ApplyDamageUploadImage}
                                LeftButton={LeftButton}
                                RightButton={ApplyDamageSubmit}
                                title='质损申请'
                                hideTabBar
                                hideNavBar={false}
                                navBar={NavBar} />
                        </Scene>
                        <Scene
                            key="settingBlock"
                            icon={TabIcon}
                            online='ios-settings'
                            outline='ios-settings-outline' >
                            <Scene
                                key="setting"
                                component={Setting}
                                initial={true}
                                title='设置'
                                hideNavBar={false}
                                navBar={NavBar} />
                            <Scene
                                key="updatePassword"
                                component={UpdatePassword}
                                title='修改密码'
                                hideTabBar
                                hideNavBar={false}
                                navBar={NavBar} />
                            <Scene
                                key="personalCenter"
                                component={PersonalCenter}
                                title='个人中心'
                                hideTabBar
                                hideNavBar={false}
                                navBar={NavBar} />
                        </Scene>
                    </Scene>
                </Scene>
            </Router>
        )
    }
}
