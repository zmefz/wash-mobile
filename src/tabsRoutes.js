import React from 'react'
import { Icon } from 'react-native-material-ui'

import Main from './containers/Main'
import Basket from './containers/Basket'
import Settings from './containers/Settings'

const tabs = [Main, Basket, Settings]

const routes = tabs.reduce((hash, tab) => {
  hash[tab.name] = {
    screen: tab.component,
  }
  return hash
}, {})

const tabsByName = tabs.reduce((hash, tab) => {
  hash[tab.name] = tab
  return hash
}, {})

export const tabsRoutesConfig = {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state

      const tab = tabsByName[routeName] || {}
      const iconName = tab.iconName

      return !!iconName && <Icon name={iconName} color={tintColor} />
    },
  }),
  tabBarOptions: {
    activeTintColor: 'blue',
    inactiveTintColor: 'gray',
  },
}

export default routes
