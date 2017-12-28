import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import { Icon } from 'native-base'
import { fontSizeCoeff } from '../../../../util/util'
import { connect } from 'react-redux'
import globalStyles from '../../../GlobalStyles'

class CarInfoForDemageInfo extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.headerContainer]}>
                    <Icon name='ios-car' style={[styles.headerIcon, globalStyles.styleColor]} />
                    <Text style={[globalStyles.largeText, globalStyles.styleColor, styles.headerText, {}]}>12345678901234567</Text>
                </View>
                <View style={styles.itemContainer}>
                    <View style={styles.item}>
                        <Text style={globalStyles.midText}><Text style={styles.ItemTilte}>品牌：</Text>奥迪</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={globalStyles.midText}><Text style={styles.ItemTilte}>委托方：</Text>安盛船务</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={globalStyles.midText}><Text style={styles.ItemTilte}>出发地：</Text>城市+地址</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={globalStyles.midText}><Text style={styles.ItemTilte}>目的地：</Text>城市+经销商</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.3,
        borderColor: '#777',
        paddingVertical: 10
    },
    itemContainer: {
        paddingVertical:5
    },
    item: {
        paddingVertical:5,
        flexDirection: 'row'
    },
    headerIcon: {
        fontSize: 25
    },
    headerText: {
        paddingLeft: 10
    },
    ItemTilte: {
        fontWeight:'bold'
    },
    container: {
        margin: 15
    }
})

const mapStateToProps = (state) => {
    return {
        templateReducer: state.templateReducer
    }
}

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(CarInfoForDemageInfo)
