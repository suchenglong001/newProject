import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity
} from 'react-native'
import { fontSizeCoeff } from '../../../util/util'
import { connect } from 'react-redux'
import { Container, Content, List, Left, ListItem, Thumbnail, Separator, Body, Right, Icon } from 'native-base'
import globalStyles from '../../GlobalStyles'

const renderListItem = props => {
    const { item, index } = props
    return(
        <View>
            <Text>item</Text>
        </View>
    )
}

const renderEmpty = () => {
    return(
        <View style={styles.listEmptyContainer}>
            <Thumbnail square source={{ uri: 'emptylisticon' }} />
            <Text style={[globalStyles.largeText, styles.listEmptyText]}>暂无质损记录</Text>
        </View>
    )
}

class DemageList extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        return (
            <Container>
                <FlatList 
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={renderEmpty}
                data={[1,2,3,4,5,6,7]}
                renderItem={renderListItem}/>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    listEmptyContainer: {
        alignItems: 'center',
        marginTop: 60
    },
    listEmptyText: {
        color: '#aaa',
        marginTop: 30
    }
})

const mapStateToProps = (state) => {
    return {
        demageListReducer: state.demageListReducer
    }
}

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(DemageList)
