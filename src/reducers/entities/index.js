import { combineReducers } from 'redux'
import studentsReducer from './students'
import quizzesReducer from './quizzes'
import teachersReducer from './teachers'
import quizAppsReducer from './quizApps'

export default combineReducers({
  students: studentsReducer,
  quizzes: quizzesReducer,
  teachers: teachersReducer,
  quizApps: quizAppsReducer,
})
