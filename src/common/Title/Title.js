import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import styles from './titleStyles'

export default function Title({ children, ...rest }) {
  return (
    <Text style={styles.text} {...rest}>
      {children}
    </Text>
  )
}

Title.propTypes = {
  children: PropTypes.node,
}
