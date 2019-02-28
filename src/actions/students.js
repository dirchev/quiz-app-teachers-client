import axios from 'axios'
import { students } from 'endpoints'

export let listStudents = ({quizAppId}) => async dispatch => {
  dispatch({
    type: 'STUDENTS_LIST_REQUEST',
  })
  try {
    let {data} = await axios.get(students.list({quizAppId}))
    dispatch({ type: 'STUDENTS_LIST_SUCCESS', payload: {students: data, quizAppId: quizAppId} })
  } catch (err) {
    dispatch({ type: 'STUDENTS_LIST_ERROR', payload: {error: err.response.data} })
  }
}

export let removeStudent = ({quizAppId, studentId}) => async dispatch => {
  dispatch({
    type: 'STUDENT_REMOVE_REQUEST',
  })
  try {
    await axios.delete(students.delete({quizAppId, studentId}))
    dispatch({ type: 'STUDENT_REMOVE_SUCCESS', payload: {quizAppId, studentId} })
  } catch (err) {
    dispatch({ type: 'STUDENT_REMOVE_ERROR', payload: {error: err.response.data} })
  }
}
