import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView, View, ActivityIndicator } from 'react-native'
import Title from '../Title'
import styles from './pageContainerStyles'

export default function PageContainer({
  scrollable,
  loading,
  title,
  children,
}) {
  const ContainerComponent = scrollable ? ScrollView : View
  const content = loading ? (
    <ActivityIndicator style={styles.spinner} size="large" />
  ) : (
    children
  )
  return (
    <ContainerComponent>
      {!!title && <Title>{title}</Title>}
      {content}
    </ContainerComponent>
  )
}

PageContainer.propTypes = {
  scrollable: PropTypes.bool,
  loading: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}

PageContainer.defaultProps = {
  scrollable: false,
  loading: false,
  title: null,
}
