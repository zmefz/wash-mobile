import React from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import { staffItem } from '../../common/propTypes'

export default class StaffListItem extends React.PureComponent {
  static propTypes = {
    item: staffItem.isRequired,
    editing: PropTypes.bool.isRequired,
  }

  render() {
    const { editing, item } = this.props
    const { name } = item

    return (
      <View>
        <Text>{name}</Text>
      </View>
    )
  }
}
