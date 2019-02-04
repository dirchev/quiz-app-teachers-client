const DEFAULT_STATE = []

const quizAppsReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'QUIZ_APPS_LIST_SUCCESS':
      return action.payload.quizApps.map(i => i._id)
    default:
      return state
  }
}

export default quizAppsReducer
