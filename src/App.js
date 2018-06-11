import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'react-native-material-ui'
import configureStore from './store/configureStore'
import TabRouter from './TabRouter'
import uiTheme from './uiTheme'

const store = configureStore()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider uiTheme={uiTheme}>
          <TabRouter />
        </ThemeProvider>
      </Provider>
    )
  }
}
