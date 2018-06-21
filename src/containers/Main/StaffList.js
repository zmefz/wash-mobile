import React from 'react'
import PropTypes from 'prop-types'
import { FlatList, ScrollView } from 'react-native'
import StaffListItem from './StaffListItem'
import { staffItem } from '../../common/propTypes'

export default class StaffList extends React.PureComponent {
  static propTypes = {
    items: PropTypes.arrayOf(staffItem).isRequired,
    editing: PropTypes.bool.isRequired,
  }

  renderItem = ({ item, index }) => {
    const { editing, moveToBasket } = this.props
    const { name } = item

    return (
      <StaffListItem
        item={item}
        index={index}
        editing={editing}
        moveToBasket={moveToBasket}
      />
    )
  }

  _keyExtractor(item) {
    return item.name
  }

  render() {
    const { items, editing } = this.props

    return (
      <FlatList
        data={items}
        editing={editing}
        renderItem={this.renderItem}
        keyExtractor={this._keyExtractor}
      />
    )
  }
}
