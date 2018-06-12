import React from 'react'
import PropTypes from 'prop-types'
import { FlatList } from 'react-native'
import StaffListItem from './StaffListItem'
import { staffItem } from '../../common/propTypes'

export default class StaffList extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(staffItem).isRequired,
    editing: PropTypes.bool.isRequired,
  }

  renderItem = ({ item }) => {
    const { editing } = this.props
    const { name } = item

    return <StaffListItem item={item} editing={editing} />
  }

  _keyExtractor(item) {
    return item.name
  }

  render() {
    const { items } = this.props

    return (
      <FlatList
        data={items}
        renderItem={this.renderItem}
        keyExtractor={this._keyExtractor}
      />
    )
  }
}
