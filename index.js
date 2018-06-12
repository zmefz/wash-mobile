import { AppRegistry } from 'react-native'
import { YellowBox } from 'react-native'
import App from './src/App'

// DEVNOTE: ignore warning from react-native
// https://github.com/react-navigation/react-navigation/issues/3956
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader',
])

AppRegistry.registerComponent('TimeToWash', () => App)
