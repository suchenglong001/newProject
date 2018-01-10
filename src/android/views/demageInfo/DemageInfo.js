import React, { Component } from 'react'
import {
    StyleSheet,
    View
} from 'react-native'
import { fontSizeCoeff } from '../../../util/util'
import { connect } from 'react-redux'
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, ListItem } from 'native-base'
import globalStyles from '../../GlobalStyles'
import CarInfoForDemage from '../../components/demageInfo/CarInfoForDemage'
import RecordForDemage from '../../components/demageInfo/RecordForDemage'
import ImageListForDemage from '../../components/demageInfo/ImageListForDemage'
import DemageOpResult from '../../components/demageInfo/DemageOpResult'
import DemageDetail from '../../components/demageInfo/DemageDetail'
import DemageEditor from '../../components/demageInfo/DemageEditor'

class DemageInfo extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    // static defaultProps = {
    //     ininitParam: {
    //         id: 1
    //     }
    // }

    render() {
        const { initParam } = this.props
        console.log(this.props)
        return (
            <Container style={globalStyles.listBackgroundColor}>
                <Tabs>
                    <Tab
                        tabStyle={{ backgroundColor: '#36759e' }}
                        activeTabStyle={{ backgroundColor: '#36759e' }}
                        activeTextStyle={{ color: '#fff' }}
                        textStyle={{ color: '#adc5d5' }}
                        heading="车辆">
                        <Container>
                            <CarInfoForDemage initParam={initParam} />
                            <RecordForDemage />
                        </Container>
                    </Tab>
                    <Tab
                        tabStyle={{ backgroundColor: '#36759e' }}
                        activeTabStyle={{ backgroundColor: '#36759e' }}
                        activeTextStyle={{ color: '#fff' }}
                        textStyle={{ color: '#adc5d5' }}
                        heading="质损">
                        <Container>
                            <DemageDetail />
                        </Container>
                    </Tab>
                    <Tab
                        tabStyle={{ backgroundColor: '#36759e' }}
                        activeTabStyle={{ backgroundColor: '#36759e' }}
                        activeTextStyle={{ color: '#fff' }}
                        textStyle={{ color: '#adc5d5' }}
                        heading="照片">
                        <Container>
                            <ImageListForDemage />
                        </Container>
                    </Tab>
                    <Tab
                        tabStyle={{ backgroundColor: '#36759e', }}
                        activeTabStyle={{ backgroundColor: '#36759e' }}
                        activeTextStyle={{ color: '#fff' }}
                        textStyle={{ color: '#adc5d5' }}
                        heading="处理">
                        <Container>
                            <DemageOpResult />
                        </Container>
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
