import React, { Component } from 'react'
import {
    StyleSheet,

    View
} from 'react-native'
import { fontSizeCoeff } from '../../../util/util'
import { connect } from 'react-redux'
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, ListItem } from 'native-base'
import globalStyles from '../../GlobalStyles'
import CarInfoForDemageInfo from '../../components/demageInfo/carInfo/CarInfoForDemageInfo'
import RecordForDemageInfo from '../../components/demageInfo/record/RecordForDemageInfo'
import ImageListForDemageInfo from '../../components/demageInfo/imageList/ImageListForDemageInfo'
import DemageOpResult from '../../components/demageInfo/opResult/DemageOpResult'
import DemageDetail from '../../components/demageInfo/demageDetail/DemageDetail'

class DemageInfo extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        return (
            <Container style={globalStyles.listBackgroundColor}>
                <Tabs onChangeTab={param => console.log(param)}>
                    <Tab
                        tabStyle={{ backgroundColor: '#36759e' }}
                        activeTabStyle={{ backgroundColor: '#36759e' }}
                        activeTextStyle={{ color: '#fff' }}
                        textStyle={{ color: '#adc5d5' }}
                        heading="车辆">
                        <View style={{flex:1}}>
                            <DemageDetail />
                        </View>
                    </Tab>
                    <Tab
                        tabStyle={{ backgroundColor: '#36759e' }}
                        activeTabStyle={{ backgroundColor: '#36759e' }}
                        activeTextStyle={{ color: '#fff' }}
                        textStyle={{ color: '#adc5d5' }}
                        heading="质损">
                        <View style={{flex:1}}>
                            <CarInfoForDemageInfo />
                            <RecordForDemageInfo />
                        </View>

                    </Tab>
                    <Tab
                        tabStyle={{ backgroundColor: '#36759e' }}
                        activeTabStyle={{ backgroundColor: '#36759e' }}
                        activeTextStyle={{ color: '#fff' }}
                        textStyle={{ color: '#adc5d5' }}
                        heading="照片">
                        <View>
                            <ImageListForDemageInfo />
                        </View>
                    </Tab>
                    <Tab
                        tabStyle={{ backgroundColor: '#36759e', }}
                        activeTabStyle={{ backgroundColor: '#36759e' }}
                        activeTextStyle={{ color: '#fff' }}
                        textStyle={{ color: '#adc5d5' }}
                        heading="处理">
                        <View>
                            <DemageOpResult />
                        </View>
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        demageInfoReducer: state.demageInfoReducer
    }
}

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(DemageInfo)
