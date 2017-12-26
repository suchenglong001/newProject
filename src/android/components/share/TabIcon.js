import React, { PropTypes } from 'react'
import { View, Text } from 'react-native'
import { Icon, Button } from 'native-base'
import { Actions } from 'react-native-router-flux'
import {
  StyleSheet
} from 'react-native'
import globalStyles from '../../GlobalStyles'


const propTypes = {
  selected: PropTypes.bool,
  online: PropTypes.string,
  outline: PropTypes.string
}

const TabIcon = props => {
  return (
    <Icon
      name={props.selected ? props.online : props.outline}
      style={props.selected ? globalStyles.styleColor : styles.iconOutline} />
  )
}

const styles = StyleSheet.create({
  iconOutline: {
    color: '#999'
  }
})

TabIcon.propTypes = propTypes

export default TabIcon

