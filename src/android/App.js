import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import { Button, Icon, Label } from 'native-base'
import { Scene, TabBar, Router, ActionConst, Actions, Switch, Reducer } from 'react-native-router-flux'
import { connect } from 'react-redux'

import NavBar from './components/share/bar/NavBar'
import SearchBar from './components/share/bar/SearchBar'
import NavSearchBar from './components/share/bar/NavSearchBar'
import SearchCarBar from './components/share/bar/SearchCarBar'
import SearchDriverBar from './components/share/bar/SearchDriverBar'
import TabIcon from './components/share/TabIcon'
import LeftButton from './components/share/bar/LeftButton'
import ApplyDamageSubmit from './components/applyDamage/submit/ApplyDamageSubmit'
import ApplyDamageUploadImageSubmit from './components/applyDamageUploadImage/ApplyDamageUploadImageSubmit'

import Home from './views/Home'
import Setting from './views/setting/Setting'
import UpdatePassword from './views/updatePassword/UpdatePassword'
import PersonalCenter from './views/personalCenter/PersonalCenter'
import CarInfo from './views/carInfo/CarInfo'
import SearchCar from './views/searchCar/SearchCar'
import ApplyDamage from './views/ApplyDamage'
import ApplyDamageUploadImage from './views/applyDamageUploadImage/ApplyDamageUploadImage'
import Login from './views/login/Login'
import Initialization from './views/initialization/Initialization'
import DemageInfo from './views/demageInfo/DemageInfo'
import DemageList from './views/demageList/DemageList'
import ResponsibilityInfo from './views/responsibilityInfo/ResponsibilityInfo'
import ResponsibilityList from './views/responsibilityList/ResponsibilityList'
import SelectDriver from './views/select/driver/SelectDriver'
import SinglePhotoView from './views/SinglePhotoView'
import RetrievePassword from './views/retrievePassword/RetrievePassword'
import QRCodeScreen from './views/QRCodeScreen'
import Orientation from 'react-native-orientation'


const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: '#d3dde2',
    },
    tabBarSelectedItemStyle: {
        backgroundColor: '#d3dde2',
    }
})

const mapStateToProps = (state) => {
    return {
        loginReducer: state.loginReducer
    }
}

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

    componentWillMount() {
        Orientation.lockToPortrait()
    }

    render() {
        console.disableYellowBox = true
        return (
            <Router getSceneStyle={getSceneStyle}>
                <Scene key="root">
                    <Scene initial={true} key="initialization" component={Initialization} hideNavBar hideTabBar />
                    <Scene
                        key="mainRoot"
                        component={connect(mapStateToProps)(Switch)}
                        tabs={true}
                        type={ActionConst.RESET}
                        selector={(props) => {
                            const { user } = props.loginReducer.data
                            if (user.mobile
                                && user.token
                                && user.uid
                                && user.status
                                && user.type) {
                                return 'main'
                            } else {
                                return 'loginBlock'
                            }
                        }}
                    >
                        <Scene key="loginBlock" >
                            <Scene key="login" initial={true} component={Login} hideNavBar hideTabBar />
                            <Scene key="retrievePassword" title='找回密码' component={RetrievePassword} hideTabBar hideNavBar={false} LeftButton={LeftButton} navBar={NavBar} />
                            <Scene key="qrCodeScreen" title='扫一扫' component={QRCodeScreen} hideNavBar={false} hideTabBar navBar={NavBar} />
                        </Scene>
                        <Scene
                            key="main"
                            tabs={true}
                            tabBarStyle={styles.tabBarStyle}
                            tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}>
                            <Scene key="homeBlock" icon={TabIcon} initial={true} online='ios-home' outline='ios-home-outline' >
                                <Scene key="home" component={Home} initial={true} title='首页' hideNavBar={false} navBar={SearchBar} />
                                <Scene key="carInfoAtHomeBlock" component={CarInfo} LeftButton={LeftButton} title='车辆信息' hideNavBar={false} hideTabBar navBar={NavBar} />
                                <Scene key="searchCarAtHomeBlock" component={SearchCar} hideNavBar={false} hideTabBar navBar={SearchCarBar} />
                                <Scene key="selectDriverAtHomeBlock" component={SelectDriver} hideNavBar={false} hideTabBar navBar={SearchDriverBar} />
                                <Scene key="singlePhotoViewAtHomeBlock" component={SinglePhotoView} hideNavBar hideTabBar />
                                <Scene key="applyDamageAtHomeBlock" component={ApplyDamage} LeftButton={LeftButton} RightButton={ApplyDamageSubmit}
                                    title='质损申请' hideTabBar hideNavBar={false} navBar={NavBar} />
                                <Scene key="applyDamageUploadImageAtHomeBlock" component={ApplyDamageUploadImage} LeftButton={LeftButton} RightButton={ApplyDamageUploadImageSubmit}
                                    title='质损申请' hideTabBar hideNavBar={false} navBar={NavBar} />
                            </Scene>
                            <Scene key="settingBlock" icon={TabIcon} online='ios-settings' outline='ios-settings-outline' >
                                <Scene key="setting" component={Setting} title='设置' hideNavBar={false} navBar={SearchBar} />
                                <Scene key="carInfoAtSettingBlock" component={CarInfo} LeftButton={LeftButton} title='车辆信息' hideNavBar={false} hideTabBar navBar={NavBar} />
                                <Scene key="searchCarAtSettingBlock" component={SearchCar} hideNavBar={false} hideTabBar navBar={SearchCarBar} />
                                <Scene key="selectDriverAtSettingBlock" component={SelectDriver} hideNavBar={false} hideTabBar navBar={SearchDriverBar} />
                                <Scene key="singlePhotoViewAtSettingBlock" component={SinglePhotoView} hideNavBar hideTabBar />
                                <Scene key="applyDamageAtSettingBlock" component={ApplyDamage} LeftButton={LeftButton} RightButton={ApplyDamageSubmit}
                                    title='质损申请' hideTabBar hideNavBar={false} navBar={NavBar} />
                                <Scene key="applyDamageUploadImageAtSettingBlock" component={ApplyDamageUploadImage} LeftButton={LeftButton} RightButton={ApplyDamageUploadImageSubmit}
                                    title='质损申请' hideTabBar hideNavBar={false} navBar={NavBar} />
                                <Scene key="updatePassword" LeftButton={LeftButton} component={UpdatePassword} title='修改密码'
                                    hideTabBar hideNavBar={false} navBar={NavBar} />
                                <Scene key="demageInfo" LeftButton={LeftButton} component={DemageInfo} title='质损详情' hideTabBar
                                    hideNavBar={false} navBar={NavBar} />
                                <Scene key="demageList" LeftButton={LeftButton} component={DemageList} title='我的质损' hideTabBar
                                    hideNavBar={false} navBar={NavBar} />
                                <Scene key="responsibilityInfo" LeftButton={LeftButton} component={ResponsibilityInfo} title='责任详情'
                                    hideTabBar hideNavBar={false} navBar={NavBar} />
                                <Scene key="responsibilityList" LeftButton={LeftButton} component={ResponsibilityList} title='我的责任'
                                    hideTabBar hideNavBar={false} navBar={NavBar} />
                                <Scene key="personalCenter" LeftButton={LeftButton} component={PersonalCenter} title='个人中心'
                                    hideTabBar hideNavBar={false} navBar={NavBar} />
                            </Scene>
                        </Scene>
                    </Scene>
                </Scene>
            </Router>
        )
    }
}
