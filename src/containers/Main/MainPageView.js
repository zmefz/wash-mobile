import React from 'react'
import PropTypes from 'prop-types'
import allStrings from '../../strings'
import PageContainer from '../../common/PageContainer'
import { staffItem } from '../../common/propTypes'
import StaffList from './StaffList'

const strings = allStrings.main

export default class MainPageView extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(staffItem).isRequired,
    editing: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }

  render() {
    const { editing, items, loading, error } = this.props

    return (
      <PageContainer
        title={`${strings.title}:`}
        loading={loading}
        error={error}
      >
        <StaffList editing={editing} items={items} />
      </PageContainer>
    )
  }
}
