import arrayToEntities from "utils/arrayToEntities";
import { omit } from "lodash"

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
      return omit({
        ...state,
        [action.payload.quiz._id]: {
          ...state[action.payload.quiz._id],
          ...action.payload.quiz
        }
      }, 'new')
    case 'QUIZ_UPDATE_LOCAL':
    case 'QUIZ_PUBLISH_SUCCESS':
    case 'QUIZ_RELEASE_MARKS_SUCCESS':
      return {
        ...state,
        [action.payload.quiz._id]: {
          ...state[action.payload.quiz._id],
          ...action.payload.quiz
        }
      }
    case 'QUIZ_DELETE_SUCCESS':
      return omit({
        ...state,
      }, action.payload.quizId)
    case 'QUIZ_ENGAGEMENTS_LIST_SUCCESS':
      return {
        ...state,
        [action.payload.quizId]: {
          ...state[action.payload.quizId],
          quizEngagements: action.payload.quizEngagements.map(({_id}) => _id)
        }
      }
    default:
      return state
  }
}

export default quizessEntities
