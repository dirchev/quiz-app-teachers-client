const hostname = `http://localhost:8080` // TODO get hostname from env variable

export let login = `${hostname}/api/login`
export let register = `${hostname}/api/register`

export let quizApps = {
  list: `${hostname}/api/quiz-app`,
  create: `${hostname}/api/quiz-app`,
  update: ({quizAppId}) => `${hostname}/api/quiz-app/${quizAppId}`,
  delete: ({quizAppId}) => `${hostname}/api/quiz-app/${quizAppId}`,
}

export let quizess = {
  create: ({quizAppId}) => `${hostname}/api/quiz-app/${quizAppId}/quizess`,
  list: ({quizAppId}) => `${hostname}/api/quiz-app/${quizAppId}/quizess`,
  update: ({quizAppId, quizId}) => `${hostname}/api/quiz-app/${quizAppId}/quizess/${quizId}`,
  delete: ({quizAppId, quizId}) => `${hostname}/api/quiz-app/${quizAppId}/quizess/${quizId}`,
  publish: ({quizAppId, quizId}) => `${hostname}/api/quiz-app/${quizAppId}/quizess/${quizId}/publish`
}

export let teachers = {
  list: ({quizAppId}) => `${hostname}/api/quiz-app/${quizAppId}/teachers`,
  add: ({quizAppId}) => `${hostname}/api/quiz-app/${quizAppId}/teachers`,
  delete: ({quizAppId, teacherId}) => `${hostname}/api/quiz-app/${quizAppId}/teachers/${teacherId}`,
}
