const DEFAULT_STATE = {
  token: null,
  loggedIn: false,
}
const authentication = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        token: action.payload.token,
        loggedIn: true,
      }
    default:
      return state
  }
}

export default authentication
