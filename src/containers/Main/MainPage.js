import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-native'
import { connect } from 'react-redux'
import MainPageView from './MainPageView'

export default class MainPage extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Main',
    headerRight: navigation.getParam('modeButton'),
  })

  static propTypes = {}

  state = {
    editing: false,
  }

  componentDidMount() {
    this.renderModeButton()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.editing !== this.state.editing) {
      this.renderModeButton()
    }
  }

  renderModeButton() {
    const { editing } = this.state
    const title = editing ? 'Back' : 'Edit'
    const action = this.toggleMode

    this.props.navigation.setParams({
      modeButton: <Button title={title} onPress={action} />,
    })
  }

  toggleMode = () => {
    this.setState(({ editing }) => ({ editing: !editing }))
  }

  render() {
    const { editing } = this.state
    return <MainPageView editing={editing} />
  }
}
