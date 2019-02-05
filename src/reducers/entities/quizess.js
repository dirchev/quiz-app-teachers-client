import arrayToEntities from "utils/arrayToEntities";

const DEFAULT_STATE = {}

const quizessEntities = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'QUIZ_LIST_SUCCESS':
      return {
        ...state,
        ...arrayToEntities(action.payload.quizess)
      }
    case 'QUIZ_LOCAL_INIT':
      return {
        ...state,
        [action.payload.quiz._id]: {
          ...state[action.payload.quiz._id],
          ...action.payload.quiz
        }
      }
    case 'QUIZ_CREATE_SUCCESS':
      let {['new']: removedValue, ...newState} = state
      return {
        ...newState,
        [action.payload.quiz._id]: {
          ...state[action.payload.quiz._id],
          ...action.payload.quiz
        }
      }
    case 'QUIZ_UPDATE_LOCAL':
      return {
        ...state,
        [action.payload.quiz._id]: {
          ...state[action.payload.quiz._id],
          ...action.payload.quiz
        }
      }
    default:
      return state
  }
}

export default quizessEntities
