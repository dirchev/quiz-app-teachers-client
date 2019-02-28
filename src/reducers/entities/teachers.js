import arrayToEntities from "utils/arrayToEntities";

const DEFAULT_STATE = {}
const teachersEntities = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'TEACHERS_LIST_SUCCESS':
      return {
        ...state,
        ...arrayToEntities(action.payload.teachers)
      }
    case 'TEACHER_ADD_SUCCESS':
      return {
        ...state,
        ...arrayToEntities([action.payload.teacher])
      }
    default:
      return state
  }
}

export default teachersEntities
