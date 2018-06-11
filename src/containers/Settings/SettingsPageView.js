import React from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'

export default class SettingsPageView extends React.Component {
  static propTypes = {};

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings</Text>
      </View>
    )
  }
}
