import arrayToEntities from "utils/arrayToEntities";
const DEFAULT_STATE = {}

const quizess = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'QUIZ_LIST_SUCCESS':
      return {
        [action.payload.quizAppId]: {
          ...state[action.payload.quizAppId],
          quizess: action.payload.quizess.map(i => i._id)
        }
      }
    case 'QUIZ_APPS_LIST_SUCCESS':
      return {
        ...state,
        ...arrayToEntities(action.payload.quizApps)
      }
    case 'QUIZ_CREATE_SUCCESS':
      return {
        ...state,
        [action.payload.quizAppId]: {
          ...state[action.payload.quizAppId],
          quizess: [
            ...state[action.payload.quizAppId].quizess,
            action.payload.quiz._id
          ]
        }
      }
    case 'TEACHER_ADD_SUCCESS':
      return {
        ...state,
        [action.payload.quizAppId]: {
          ...state[action.payload.quizAppId],
          teachers: [
            ...state[action.payload.quizAppId].teachers,
            action.payload.teacher._id
          ]
        }
      }
    case 'QUIZ_DELETE_SUCCESS':
      return {
        ...state,
        [action.payload.quizAppId]: {
          ...state[action.payload.quizAppId],
          quizess: state[action.payload.quizAppId].quizess.filter(q => q !== action.payload.quizId)
        }
      }
    case 'TEACHER_REMOVE_SUCCESS':
      return {
        ...state,
        [action.payload.quizAppId]: {
          ...state[action.payload.quizAppId],
          teachers: state[action.payload.quizAppId].teachers.filter(q => q !== action.payload.teacherId)
        }
      }
    default:
      return state
  }
}

export default quizess
