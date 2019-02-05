import axios from 'axios'
import {quizess} from 'endpoints'
import {debounce, omit} from 'lodash'

export let loadQuizess = ({quizAppId}) => async dispatch => {
  dispatch({
    type: 'QUIZ_LIST_REQUEST',
  })
  try {
    let {data} = await axios.get(quizess.list({quizAppId}))
    dispatch({ type: 'QUIZ_LIST_SUCCESS', payload: {quizess: data, quizAppId: quizAppId} })
  } catch (err) {
    console.error(err)
    dispatch({ type: 'QUIZ_LIST_ERROR', payload: {error: err.response.data} })
  }
}

let syncQuizToAPIDebounced = debounce(async ({quizAppId, quiz}, dispatch) => {
  dispatch({
    type: 'QUIZ_UPDATE_REQUEST',
  })
  try {
    let {data} = await axios.put(quizess.update({quizAppId, quizId: quiz._id}), quiz)
    dispatch({ type: 'QUIZ_UPDATE_SUCCESS', payload: {quiz: data} })
  } catch (err) {
    console.error(err)
    dispatch({ type: 'QUIZ_UPDATE_ERROR', payload: {error: err.response.data} })
  }
}, 3000)

export let updateQuiz = ({quizAppId, quiz}) => async dispatch => {
  dispatch({
    type: 'QUIZ_UPDATE_LOCAL',
    payload: {
      quiz: quiz
    }
  })

  if (quiz._id !== 'new') syncQuizToAPIDebounced({quizAppId, quiz}, dispatch)
}

export let saveQuiz = ({quizAppId, quiz}) => async dispatch => {
  if (quiz._id !== 'new') {
    // send latest data to the func
    syncQuizToAPIDebounced({quizAppId, quiz}, dispatch)
    // and immediately execute
    syncQuizToAPIDebounced.flush()
  } else {
    // create quiz
    dispatch({
      type: 'QUIZ_CREATE_REQUEST',
    })
    try {
      let {data} = await axios.post(quizess.create({quizAppId}), omit(quiz, '_id'))
      dispatch({ type: 'QUIZ_CREATE_SUCCESS', payload: {quiz: data, quizAppId} })
    } catch (err) {
      dispatch({ type: 'QUIZ_CREATE_ERROR', payload: {error: err.response.data} })
    }
  }
}
