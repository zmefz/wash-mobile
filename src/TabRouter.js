import { createBottomTabNavigator } from 'react-navigation'
import tabsRoutes, { tabsRoutesConfig } from './tabsRoutes'

export default createBottomTabNavigator(tabsRoutes, tabsRoutesConfig)
