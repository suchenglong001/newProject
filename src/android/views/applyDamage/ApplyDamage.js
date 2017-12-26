import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,

} from 'react-native'
import { connect } from 'react-redux'
import { Container, Content, Input, Label, Icon } from 'native-base'
import globalStyles ,{textColor} from '../../GlobalStyles'

class ApplyDamage extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        return (
            <Container>
                <Content>
                    <View style={styles.item}>
                        <Label style={[styles.label, globalStyles.midText,globalStyles.styleColor]}>质损描述</Label>
                        <Input multiline={true} style={[styles.inputArea,globalStyles.midText]} />
                    </View>
                    <View style={[styles.item, styles.itemSelectContainer]}>
                        <Label style={globalStyles.midText}>货车司机：</Label>
                        <View style={styles.itemSelect}>
                            <Label style={globalStyles.midText}>王大雷(13838385438)</Label>
                            <Icon name='md-arrow-dropdown' style={globalStyles.formIcon} />
                        </View>
                    </View>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        margin: 15
    },
    label: {
        marginVertical: 15
    },
    itemSelectContainer: {
        borderBottomWidth: 0.3,
        borderColor: '#777',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 15,
        alignItems: 'center'
    },
    itemSelect: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputArea: {
        height: 200,
        textAlignVertical: 'top',
        borderWidth: 0.3,
        borderColor: '#777'
    }
})

const mapStateToProps = (state) => {
    return {
        applyDamageReducer: state.applyDamageReducer
    }
}

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(ApplyDamage)
