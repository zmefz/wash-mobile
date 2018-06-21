import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, Image, Button } from 'react-native'
import { staffItem } from '../../common/propTypes'

import styles from './staffListItemStyles'
import allStrings from '../../strings'

const strings = allStrings.main.card

export default class StaffListItem extends React.PureComponent {
  static propTypes = {
    item: staffItem.isRequired,
    editing: PropTypes.bool.isRequired,
  }

  handlePress = () => {
    const { item, moveToBasket } = this.props

    moveToBasket(item)
  }

  render() {
    const { editing, item, index } = this.props
    const { name, count, clean, src } = item

    return (
      <View style={[styles.card, index > 0 && styles.cardTopOffset]}>
        <Image style={styles.cardImage} source={{ uri: src }} />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{name}</Text>
          <Text>{strings.count(count)}</Text>
          <Text>{strings.cleanCount(clean)}</Text>
          {editing && (
            <Button
              onPress={this.handlePress}
              title={strings.moveToBasket}
              color="rgba(0,0,0,.3)"
            />
          )}
        </View>
      </View>
    )
  }
}
