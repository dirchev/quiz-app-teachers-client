let root = process.env.REACT_APP_ROOT_URL || ''

export let login = `${root}/api/login`
export let register = `${root}/api/register`

export let quizApps = {
  list: `${root}/api/quiz-app`,
  create: `${root}/api/quiz-app`,
  update: ({quizAppId}) => `${root}/api/quiz-app/${quizAppId}`,
  delete: ({quizAppId}) => `${root}/api/quiz-app/${quizAppId}`,
  userTests: ({quizAppId}) => `${root}/api/quiz-app/${quizAppId}/user-tests`,
}

export let quizess = {
  create: ({quizAppId}) => `${root}/api/quiz-app/${quizAppId}/quizess`,
  list: ({quizAppId}) => `${root}/api/quiz-app/${quizAppId}/quizess`,
  update: ({quizAppId, quizId}) => `${root}/api/quiz-app/${quizAppId}/quizess/${quizId}`,
  delete: ({quizAppId, quizId}) => `${root}/api/quiz-app/${quizAppId}/quizess/${quizId}`,
  publish: ({quizAppId, quizId}) => `${root}/api/quiz-app/${quizAppId}/quizess/${quizId}/publish`,
  releaseMarks: ({quizAppId, quizId}) => `${root}/api/quiz-app/${quizAppId}/quizess/${quizId}/release-marks`,
  stats: ({quizAppId, quizId}) => `${root}/api/quiz-app/${quizAppId}/quizess/${quizId}/stats`
}

export let teachers = {
  list: ({quizAppId}) => `${root}/api/quiz-app/${quizAppId}/teachers`,
  add: ({quizAppId}) => `${root}/api/quiz-app/${quizAppId}/teachers`,
  delete: ({quizAppId, teacherId}) => `${root}/api/quiz-app/${quizAppId}/teachers/${teacherId}`,
}

export let students = {
  list: ({quizAppId}) => `${root}/api/quiz-app/${quizAppId}/students`,
  delete: ({quizAppId, studentId}) => `${root}/api/quiz-app/${quizAppId}/students/${studentId}`,
}

export let quizEngagements = {
  list: ({quizId, quizAppId}) => `${root}/api/quiz-app/${quizAppId}/quizess/${quizId}/quiz-engagements`,
  update: ({quizId, quizAppId, quizEngagementId}) => `${root}/api/quiz-app/${quizAppId}/quizess/${quizId}/quiz-engagements/${quizEngagementId}`,
  finishMarking: ({quizId, quizAppId, quizEngagementId}) => `${root}/api/quiz-app/${quizAppId}/quizess/${quizId}/quiz-engagements/${quizEngagementId}/finish-marking`,
}
