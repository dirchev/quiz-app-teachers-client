import axios from 'axios'
import { quizEngagements } from 'endpoints'
import { debounce } from 'lodash'

export let listQuizEngagements = ({quizId, quizAppId}) => async dispatch => {
  dispatch({
    type: 'QUIZ_ENGAGEMENTS_LIST_REQUEST',
  })
  try {
    let {data} = await axios.get(quizEngagements.list({quizId, quizAppId}))
    dispatch({ type: 'QUIZ_ENGAGEMENTS_LIST_SUCCESS', payload: {quizEngagements: data, quizId} })
  } catch (err) {
    dispatch({ type: 'QUIZ_ENGAGEMENTS_LIST_ERROR', payload: {error: err.response.data} })
  }
}

let syncQuizEngagementToAPIDebounced = debounce(async ({quizAppId, quizId, quizEngagement}, dispatch) => {
    dispatch({
      type: 'QUIZ_ENGAGEMENT_UPDATE_REQUEST',
    })
    try {
      let {data} = await axios.put(
        quizEngagements.update({quizAppId, quizId, quizEngagementId: quizEngagement._id}),
        {
          answersMarks: quizEngagement.answersMarks,
          answersFeedbacks: quizEngagement.answersFeedbacks,
        }
      )
      dispatch({ type: 'QUIZ_ENGAGEMENT_UPDATE_SUCCESS', payload: {quizEngagement: data} })
    } catch (err) {
      console.error(err)
      dispatch({ type: 'QUIZ_ENGAGEMENT_UPDATE_ERROR', payload: {error: err.response.data} })
    }
}, 3000)

export let updateQuizEngagement = ({quizAppId, quizId, quizEngagement}) => async dispatch => {
  dispatch({
    type: 'QUIZ_ENGAGEMENT_UPDATE_LOCAL',
    payload: {
      quizEngagement: quizEngagement
    }
  })

  syncQuizEngagementToAPIDebounced({quizAppId, quizId, quizEngagement}, dispatch)
}

export let finishQuizEngagementMarking = ({quizAppId, quizId, quizEngagementId}) => async dispatch => {
  dispatch({
    type: 'QUIZ_ENGAGEMENTS_FINISH_MARKING_REQUEST',
  })
  try {
    let {data} = await axios.post(quizEngagements.finishMarking({quizId, quizAppId, quizEngagementId}))
    dispatch({ type: 'QUIZ_ENGAGEMENTS_FINISH_MARKING_SUCCESS', payload: {quizEngagements: data, quizId} })
  } catch (err) {
    dispatch({ type: 'QUIZ_ENGAGEMENTS_FINISH_MARKING_ERROR', payload: {error: err.response.data} })
  }
}
