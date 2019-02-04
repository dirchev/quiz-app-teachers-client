import { combineReducers } from 'redux'
import authenticationReducer from './authentication'
import entitiesReducer from './entities'
import quizAppsReducer from './quizApps'
import statusesReducer from './statuses'
import loadingReducer from './loading';
import errorReducer from './error';

export default combineReducers({
  authentication: authenticationReducer,
  entities: entitiesReducer,
  quizApps: quizAppsReducer,
  statuses: statusesReducer,
  loading: loadingReducer,
  error: errorReducer
})
