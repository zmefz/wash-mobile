import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import TabRouter from './TabRouter'

const store = configureStore()

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <TabRouter />
      </Provider>
    )
  }
}
