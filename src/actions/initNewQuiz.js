export default (quizData, quizAppId) => async dispatch => {
  dispatch({
    type: 'QUIZ_LOCAL_INIT',
    payload: {
      quiz: quizData,
      quizAppId
    }
  })
}
