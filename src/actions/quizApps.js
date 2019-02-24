import axios from 'axios'
import {quizApps} from 'endpoints'

export let loadQuizApps = () => async dispatch => {
  dispatch({
    type: 'QUIZ_APPS_LIST_REQUEST',
  })
  try {
    let {data} = await axios.get(quizApps.list)
    dispatch({ type: 'QUIZ_APPS_LIST_SUCCESS', payload: {quizApps: data} })
  } catch (err) {
    console.error(err)
    dispatch({ type: 'QUIZ_APPS_LIST_ERROR', payload: {error: err.response.data} })
  }
}

export let createQuizApp = ({quizApp, history}) => async dispatch => {
  dispatch({
    type: 'QUIZ_APPS_CREATE_REQUEST',
  })
  try {
    let {data} = await axios.post(quizApps.create, quizApp)
    dispatch({ type: 'QUIZ_APPS_CREATE_SUCCESS', payload: {quizApp: data} })
    history.replace(`/quiz-app/${data._id}`)
  } catch (err) {
    console.error(err)
    dispatch({ type: 'QUIZ_APPS_CREATE_ERROR', payload: {error: err.response.data} })
  }
}

export let updateQuizApp = ({quizAppId, newQuizAppData}) => async dispatch => {
  dispatch({
    type: 'QUIZ_APPS_UPDATE_REQUEST',
  })
  try {
    let {data} = await axios.put(quizApps.update({quizAppId}), newQuizAppData)
    dispatch({ type: 'QUIZ_APPS_UPDATE_SUCCESS', payload: {quizApp: data} })
  } catch (err) {
    console.error(err)
    dispatch({ type: 'QUIZ_APPS_UPDATE_ERROR', payload: {error: err.response.data} })
  }
}

export let deleteQuizApp = ({quizAppId, history}) => async dispatch => {
  dispatch({
    type: 'QUIZ_APPS_DELETE_REQUEST',
  })
  try {
    let {data} = await axios.delete(quizApps.update({quizAppId}))
    history.replace(`/dashboard`)
    dispatch({ type: 'QUIZ_APPS_DELETE_SUCCESS', payload: {quizApp: data} })
  } catch (err) {
    console.error(err)
    dispatch({ type: 'QUIZ_APPS_DELETE_ERROR', payload: {error: err.response.data} })
  }
}
