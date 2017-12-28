import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import { fontSizeCoeff } from '../../../../util/util'
import { connect } from 'react-redux'

class DemageOpResult extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        return (
            <View>
                <Text style={{ fontSize: 5 * fontSizeCoeff }}>DemageOpResult</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.3,
        borderColor: '#777',
        paddingVertical: 10,
        marginHorizontal: 15
    },
    headerText: {
        paddingLeft: 10
    },
    headerIcon: {
        fontSize: 20
    },
    item: {
        marginHorizontal: 15,
        paddingVertical: 5
    }
})

const mapStateToProps = (state) => {
    return {
        templateReducer: state.templateReducer
    }
}

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(DemageOpResult)
