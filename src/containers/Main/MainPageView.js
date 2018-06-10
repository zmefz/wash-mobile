import React from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'

export default class MainPageView extends React.Component {
  static propTypes = {
    name: PropTypes.string,
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Main</Text>
      </View>
    )
  }
}
