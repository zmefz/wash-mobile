import React from 'react'
import PropTypes from 'prop-types'
import { Text, ScrollView } from 'react-native'
import Title from '../../common/Title'

export default class MainPageView extends React.Component {
  static propTypes = {}

  render() {
    const { editing } = this.props

    return (
      <ScrollView>
        <Title>Main{editing ? ' (editing)' : ''}</Title>
      </ScrollView>
    )
  }
}
