import arrayToEntities from "utils/arrayToEntities";

const DEFAULT_STATE = {}
const quizEngagementsEntities = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'QUIZ_ENGAGEMENTS_LIST_SUCCESS':
      return {
        ...state,
        ...arrayToEntities(action.payload.quizEngagements)
      }
    case 'QUIZ_ENGAGEMENT_UPDATE_LOCAL':
    case 'QUIZ_ENGAGEMENTS_FINISH_MARKING_SUCCESS':
      return {
        ...state,
        [action.payload.quizEngagement._id]: {
          ...state[action.payload.quizEngagement._id],
          ...action.payload.quizEngagement
        }
      }
    default:
      return state
  }
}

export default quizEngagementsEntities
