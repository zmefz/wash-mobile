import { StyleSheet } from 'react-native'

const CARD_HEIGHT = 100

export default StyleSheet.create({
  card: {
    height: CARD_HEIGHT,
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,.6)',
  },
  cardTopOffset: {
    marginTop: 20,
  },
  cardImage: {
    height: CARD_HEIGHT,
    width: CARD_HEIGHT,
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '400',
  },
})
