import axios from 'axios'
import { teachers } from 'endpoints'

export let listTeachers = ({quizAppId}) => async dispatch => {
  dispatch({
    type: 'TEACHERS_LIST_REQUEST',
  })
  try {
    let {data} = await axios.get(teachers.list({quizAppId}))
    dispatch({ type: 'TEACHERS_LIST_SUCCESS', payload: {quizess: data, quizAppId: quizAppId} })
  } catch (err) {
    dispatch({ type: 'TEACHERS_LIST_ERROR', payload: {error: err.response.data} })
  }
}

export let addTeacher = ({quizAppId, teacherEmail}) => async dispatch => {
  dispatch({
    type: 'TEACHER_ADD_REQUEST',
  })
  try {
    let {data} = await axios.post(teachers.add({quizAppId}), {email: teacherEmail})
    dispatch({ type: 'TEACHER_ADD_SUCCESS', payload: {quizApp: data, quizAppId: quizAppId} })
  } catch (err) {
    dispatch({ type: 'TEACHER_ADD_ERROR', payload: {error: err.response.data} })
  }
}
