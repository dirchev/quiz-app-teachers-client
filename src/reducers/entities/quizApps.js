import arrayToEntities from "utils/arrayToEntities";
const DEFAULT_STATE = {}

const quizzes = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'QUIZ_APPS_LIST_SUCCESS':
      return {
        ...state,
        ...arrayToEntities(action.payload.quizApps)
      }
    default:
      return state
  }
}

export default quizzes
