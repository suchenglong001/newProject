import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import { Button, Icon } from 'native-base'
import { fontSizeCoeff } from '../util/util'
import { Scene, TabBar, Router, ActionConst, Actions, Switch, Reducer } from 'react-native-router-flux'

import NavBar from './components/share/bar/NavBar'
import TopBar from './components/share/bar/TopBar'
import TabIcon from './components/share/TabIcon'

import Home from './views/home/Home'
import Setting from './views/setting/Setting'
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
                        <Scene key="homeBlock"
                            icon={TabIcon}
                            initial={true}
                            online='ios-home'
                            outline='ios-home-outline' >
                            <Scene
                                key="home"
                                initial={true}
                                component={Home}
                                title='首页'
                                hideNavBar={false}
                                navBar={TopBar} />
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
                                navBar={TopBar} />
                        </Scene>
                    </Scene>
                </Scene>
            </Router>
        )
    }
}
