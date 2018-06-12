import CLOTHES from './clothesActionTypes'

const initialState = {
  items: [],
  loading: false,
  error: null,
}

export default function clothesReducer(state = initialState, action) {
  switch (action.type) {
    case CLOTHES.LIST.REQUEST:
      return {
        items: [],
        loading: true,
        error: null,
      }
    case CLOTHES.LIST.SUCCEEDED:
      return {
        items: action.items,
        loading: false,
        error: null,
      }
    case CLOTHES.LIST.FAILED:
      return {
        items: [],
        loading: false,
        error: action.error,
      }
    default:
      return state
  }
}
