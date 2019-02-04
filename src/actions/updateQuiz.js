export default (newQuizData) => async dispatch => {
  dispatch({
    type: 'QUIZ_LOCAL_UPDATE',
    payload: {
      quiz: newQuizData
    }
  })
}
