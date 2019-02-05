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
