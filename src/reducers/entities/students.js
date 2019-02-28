import arrayToEntities from "utils/arrayToEntities";

const DEFAULT_STATE = {}
const teachersEntities = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'STUDENTS_LIST_SUCCESS':
      return {
        ...state,
        ...arrayToEntities(action.payload.students)
      }
    default:
      return state
  }
}

export default teachersEntities
