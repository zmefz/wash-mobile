import LocalizedStrings from 'react-native-localization'

export default new LocalizedStrings({
  en: {
    main: {
      title: 'My stuff',
      card: {
        count: count => `Сount: ${count}`,
        cleanCount: count => `Clean: ${count}`,
        moveToBasket: 'To Busket',
      },
    },
  },
  ru: {
    main: {
      title: 'Мои вещи',
      card: {
        count: count => `Количество: ${count}`,
        cleanCount: count => `Чистых: ${count}`,
        moveToBasket: 'В корзину',
      },
    },
  },
})
