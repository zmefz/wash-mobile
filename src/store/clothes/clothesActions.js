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
