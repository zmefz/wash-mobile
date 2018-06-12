import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-native'
import { connect } from 'react-redux'
import { staffItem } from '../../common/propTypes'
import { fetchList } from '../../store/clothes/clothesActions'
import MainPageView from './MainPageView'

@connect(state => {
  const { items, loading, error } = state.clothes
  return {
    items,
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
    items: PropTypes.arrayOf(staffItem),
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }

  static defaultProps = {
    items: [],
    error: null,
  }

  state = {
    editing: false,
  }

  componentDidMount() {
    this.renderModeButton()
    this.initiateListFetching()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.editing !== this.state.editing) {
      this.renderModeButton()
    }
  }

  initiateListFetching() {
    this.props.dispatch(fetchList())
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
    const { items, loading, error } = this.props

    return (
      <MainPageView
        editing={editing}
        items={items}
        loading={loading}
        error={error}
      />
    )
  }
}
