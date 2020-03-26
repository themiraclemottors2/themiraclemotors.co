import {
  ASYNC_START,
  GET_TERMINALS,
  UPDATE_PAGINATION,
  UPDATE_FILTER,
} from "../types"

const initState = {
  data: [],
  pagination: { page: 1, limit: 50 },
  filters: {},
  loading: false,
  identifier: "terminals",
}

export default (
  state = initState,
  { type, data, filters, page, identifier }
) => {
  switch (type) {
    case GET_TERMINALS:
      return {
        ...state,
        data,
        loading: false,
      }
    case ASYNC_START:
      if (identifier === initState.identifier)
        return {
          ...state,
          loading: true,
        }
      return state
    case UPDATE_FILTER:
      if (identifier === initState.identifier)
        return {
          ...state,
          filters: { ...state.filters, ...filters },
          pagination: { ...initState.pagination },
        }
      return state
    case UPDATE_PAGINATION:
      if (identifier === initState.identifier)
        return {
          ...state,
          pagination: {
            ...state.pagination,
            page,
          },
        }
      return state
    default:
      return state
  }
}
