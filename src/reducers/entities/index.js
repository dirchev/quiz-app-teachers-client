import { combineReducers } from 'redux'
import studentsReducer from './students'
import quizessReducer from './quizess'
import teachersReducer from './teachers'
import quizAppsReducer from './quizApps'

export default combineReducers({
  students: studentsReducer,
  quizess: quizessReducer,
  teachers: teachersReducer,
  quizApps: quizAppsReducer,
})
