import MainPage from './MainPage'
import { createStackNavigator } from 'react-navigation'

export default createStackNavigator({
  Main: { screen: MainPage, path: '' },
})
