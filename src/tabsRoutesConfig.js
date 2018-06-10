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

export default routes
