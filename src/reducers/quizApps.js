const DEFAULT_STATE = []

const quizAppsReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'QUIZ_APPS_LIST_SUCCESS':
      return action.payload.quizApps.map(i => i._id)
    case 'QUIZ_APPS_CREATE_SUCCESS':
      return [
        ...state,
        action.payload.quizApp._id
      ]
    case 'QUIZ_APPS_DELETE_SUCCESS':
      return state.filter((id) => id !== action.payload.quizApp._id)
    default:
      return state
  }
}

export default quizAppsReducer
