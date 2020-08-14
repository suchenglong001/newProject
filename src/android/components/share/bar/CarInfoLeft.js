import React , { Component }from 'react'
import { Button, Icon } from 'native-base'
import { Actions } from 'react-native-router-flux'
import * as checkStatisticsAction from "../../home/checkStatistics/CheckStatisticsAction";
import {connect} from "react-redux";
import {InteractionManager} from "react-native";

class CarInfoLeft extends Component{
    constructor(props) {
        super(props)
    }
    render(){
      const {getCheckStatistics}=this.props
        return(
        <Button transparent onPress={()=>{Actions.pop(), InteractionManager.runAfterInteractions(getCheckStatistics)}}>
            <Icon name='arrow-back' />
        </Button>
    )
    }

}


const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => ({
    getCheckStatistics: () => {
        dispatch(checkStatisticsAction.getCheckStatistics())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CarInfoLeft)






