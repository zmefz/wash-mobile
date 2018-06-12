import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView, View, ActivityIndicator } from 'react-native'
import Title from '../Title'
import styles from './pageContainerStyles'

export default function PageContainer({
  scrollable,
  loading,
  error,
  title,
  children,
}) {
  const ContainerComponent = scrollable ? ScrollView : View
  const content = PageContainer.renderContent({ error, loading, children })

  return (
    <ContainerComponent>
      {!!title && <Title>{title}</Title>}
      {content}
    </ContainerComponent>
  )
}

PageContainer.renderContent = ({ error, loading, children }) => {
  switch (true) {
    case !!error:
      // TODO: display error as error
      return <Title>{error}</Title>
    case !!loading:
      return <ActivityIndicator style={styles.spinner} size="large" />
    default:
      return children
  }
}

PageContainer.propTypes = {
  scrollable: PropTypes.bool,
  loading: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
}

PageContainer.defaultProps = {
  scrollable: false,
  loading: false,
  title: null,
  error: null,
}
