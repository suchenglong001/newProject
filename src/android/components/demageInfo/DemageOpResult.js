import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import { Content } from 'native-base'
import globalStyles from '../../GlobalStyles'

export default class DemageOpResult extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        return (
            <Content showsVerticalScrollIndicator={false}>
                <View style={styles.body}>
                    <Text style={[styles.text, globalStyles.midText]}><Text style={styles.title}>质损类型：</Text>普通／严重</Text>
                    <Text style={[styles.text, globalStyles.midText]}><Text style={styles.title}>责任人：</Text>张保全</Text>
                    <Text style={[styles.text, globalStyles.midText]}><Text style={styles.title}>报销人：</Text>姜超</Text>
                    <Text style={[styles.text, globalStyles.midText]}><Text style={styles.title}>维修站：</Text>普通／严重</Text>
                    <Text style={[styles.text, globalStyles.midText]}><Text style={styles.title}>维修费：¥</Text> 3400.00元</Text>
                    <Text style={[styles.text, globalStyles.midText]}><Text style={styles.title}>运费：¥</Text> 1500.00元</Text>
                    <Text style={[styles.text, globalStyles.midText]}><Text style={styles.title}>降价费：¥</Text> 1500.00元</Text>
                    <Text style={[styles.text, globalStyles.midText]}><Text style={styles.title}>罚款：¥</Text> 1500.00元</Text>
                    <Text style={[styles.text, globalStyles.midText]}><Text style={styles.title}>盈亏：¥</Text> 1500.00元</Text>
                    <View style={[styles.text, styles.strikingItem, {}]}>
                        <Text style={[styles.title, globalStyles.midText]}>责任人承担费用：</Text>
                        <Text style={globalStyles.largeText}>¥ <Text style={styles.strikingText}>1500.00</Text> 元</Text>
                    </View>
                    <View style={[styles.text, styles.strikingItem, {}]}>
                        <Text style={[styles.title, globalStyles.midText]}>公司承担费用：</Text>
                        <Text style={globalStyles.largeText}>¥ <Text style={styles.strikingText}>1500.00</Text> 元</Text>
                    </View>
                    <View style={[styles.text, styles.strikingItem, {}]}>
                        <Text style={[styles.title, globalStyles.midText]}>保险理赔：</Text>
                        <Text style={globalStyles.largeText}>¥ <Text style={styles.strikingText}>1500.00</Text> 元</Text>
                    </View>
                </View>
                <View style={styles.footer}>
                    <Text style={globalStyles.midText}><Text style={styles.title}>处理人：</Text>张建国</Text>
                </View>
            </Content>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        padding: 5
    },
    title: {
        fontWeight: 'bold'
    },
    strikingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    strikingText: {
        color: 'red'
    },
    body: {
        paddingVertical: 15,
        borderBottomWidth: 0.3,
        borderColor: '#777',
        marginHorizontal: 15
    },
    footer: {
        paddingVertical: 15,
        marginHorizontal: 15,
        alignItems: 'flex-end'
    }
})


