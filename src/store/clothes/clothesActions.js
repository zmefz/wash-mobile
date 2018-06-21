import CLOTHES from './clothesActionTypes'

export function fetchList() {
  return async (dispatch, getState, { Api }) => {
    try {
      dispatch({ type: CLOTHES.LIST.REQUEST })
      const items = await Api.get('/all-types-with-count')
      dispatch({ type: CLOTHES.LIST.SUCCEEDED, items })
    } catch (error) {
      dispatch({ type: CLOTHES.LIST.FAILED, error: error.message })
    }
  }
}

export function moveToBasket(item) {
  return async (dispatch, getState, { Api }) => {
    try {
      dispatch({ type: CLOTHES.ITEM.TO_BASKET.REQUEST })
      const response = await Api.post('...') // TODO: add path
      dispatch({ type: CLOTHES.ITEM.TO_BASKET.SUCCEEDED, response })
    } catch (error) {
      dispatch({ type: CLOTHES.ITEM.TO_BASKET.FAILED, error: error.message })
    }
  }
}
