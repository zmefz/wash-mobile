import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import MainPageView from './MainPageView'

// @connect(store => store)
export default class MainPage extends React.Component {
  static propTypes = {}

  render() {
    return <MainPageView />
  }
}
