const DEFAULT_STATE = {
    'quiz1': {
      id: 'quiz1',
      name: 'Programming 1',
      description: '',
      noOfAttempts: 0,
      isMandatory: false,
      deadline: '',
      questions: [
        {
          id: 1,
          title: 'OOP Fundamentals',
          content: 'Describe the three principles of object orientated programming',
          type: 'multiple-choice',
          anwsers: []
        },
        {
          id: 2,
          title: 'Abstract & Interface',
          content: 'Describe what is the difference between abstract classes and interfaces',
          type: 'multiple-choice',
          answers: [
            { text: 'a', points: 1 },
            { text: 'b', points: 5 },
            { text: 'c', points: 0 }
          ]
        }
      ]
    }
}

const quizzesEntities = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'QUIZ_LOCAL_INIT':
      return {
        ...state,
        [action.payload.quiz._id]: {
          ...state[action.payload.quiz._id],
          ...action.payload.quiz
        }
      }
    case 'QUIZ_LOCAL_UPDATE':
      return {
        ...state,
        [action.payload.quiz._id]: {
          ...state[action.payload.quiz._id],
          ...action.payload.quiz
        }
      }
    default:
      return state
  }
}

export default quizzesEntities
