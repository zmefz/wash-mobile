import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-native'
import { connect } from 'react-redux'
import { staffItem } from '../../common/propTypes'
import MainPageView from './MainPageView'

@connect(state => {
  const { list, loading, error } = state.clothes
  return {
    list,
    loading,
    error,
  }
})
export default class MainPage extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Main',
    headerRight: navigation.getParam('modeButton'),
  })

  static propTypes = {
    list: PropTypes.arrayOf(staffItem),
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }

  static defaultProps = {
    list: [],
    error: null,
  }

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
    const { list, loading, error } = this.props

    return (
      <MainPageView
        editing={editing}
        list={list}
        loading={loading}
        error={error}
      />
    )
  }
}
