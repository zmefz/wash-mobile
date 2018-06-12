import React from 'react'
import PropTypes from 'prop-types'
import { Text, ScrollView } from 'react-native'

export default class MainPageView extends React.Component {
  static propTypes = {}

  render() {
    const { editing } = this.props

    return (
      <ScrollView>
        <Text>Main{editing ? ' (editing)' : ''}</Text>
      </ScrollView>
    )
  }
}
