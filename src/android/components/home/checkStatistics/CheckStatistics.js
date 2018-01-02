import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import { fontSizeCoeff } from '../../../../util/util'
import { connect } from 'react-redux'
import globalStyles from '../../../GlobalStyles'
import { Thumbnail } from 'native-base'
import * as checkStatisticsAction from './CheckStatisticsAction'

class CheckStatistics extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getCheckStatistics()
    }

    render() {
        const { data: { check_count, d_count } } = this.props.checkStatisticsReducer
        return (
            <View style={[globalStyles.styleBackgroundColor, styles.container]}>
                <View style={styles.item}>
                    <View style={styles.circle}>
                        <Text style={[globalStyles.smallText, styles.text]}>本月申报</Text>
                        <Text style={[globalStyles.xlText, styles.text]}>{d_count ? `${d_count}` : '0'}</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <Thumbnail source={{ uri: `personalicon` }} style={styles.thumbnail} />
                    <Text style={[globalStyles.midText, styles.text]}>张建国</Text>
                </View>
                <View style={styles.item}>
                    <View style={styles.circle}>
                        <Text style={[globalStyles.smallText, styles.text]}>本月责任</Text>
                        <Text style={[globalStyles.xlText, styles.text]}>{check_count ? `${check_count}` : '0'}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: '#fff'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    item: {
        paddingBottom: 20,
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    thumbnail: {
        borderWidth: 4,
        borderColor: '#91afc5'
    },
    circle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 4,
        borderColor: '#91afc5',
        backgroundColor: '#4e83a7',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const mapStateToProps = (state) => {
    return {
        checkStatisticsReducer: state.checkStatisticsReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getCheckStatistics: () => {
        dispatch(checkStatisticsAction.getCheckStatistics())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckStatistics)
