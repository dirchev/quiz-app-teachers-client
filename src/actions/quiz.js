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

let syncQuizToAPIDebounced = debounce(async ({quizAppId, quiz, history}, dispatch) => {
  if (quiz._id !== 'new') {
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
  } else {
    // create quiz
    dispatch({
      type: 'QUIZ_CREATE_REQUEST',
    })
    try {
      let {data} = await axios.post(quizess.create({quizAppId}), omit(quiz, '_id'))
      dispatch({ type: 'QUIZ_CREATE_SUCCESS', payload: {quiz: data, quizAppId} })
      history.replace(`/quiz-app/${quizAppId}/quiz/${data._id}`)
    } catch (err) {
      console.error(err)
      dispatch({ type: 'QUIZ_CREATE_ERROR', payload: {error: err.response.data} })
    }
  }
}, 3000)

export let updateQuiz = ({quizAppId, quiz, history}) => async dispatch => {
  dispatch({
    type: 'QUIZ_UPDATE_LOCAL',
    payload: {
      quiz: quiz
    }
  })

  syncQuizToAPIDebounced({quizAppId, quiz, history}, dispatch)
}

export let saveQuiz = ({quizAppId, quiz, history}) => async dispatch => {
  syncQuizToAPIDebounced({quizAppId, quiz, history}, dispatch)
  syncQuizToAPIDebounced.flush()
}

export let deleteQuiz = ({quizAppId, quizId, history}) => async dispatch => {
  dispatch({ type: 'QUIZ_DELETE_REQUEST' })
  try {
    let {data} = await axios.delete(quizess.delete({quizAppId, quizId}))
    dispatch({ type: 'QUIZ_DELETE_SUCCESS', payload: {quizId: data._id, quizAppId} })
    history.replace(`/quiz-app/${quizAppId}`)
  } catch (err) {
    dispatch({ type: 'QUIZ_DELETE_ERROR', payload: {error: err.response.data} })
  }
}
