export let login = 'http://localhost:8080/api/login'
export let register = 'http://localhost:8080/api/register'
export let quizApps = {
  list: 'http://localhost:8080/api/quiz-app'
}
export let quizess = {
  create: ({quizAppId}) => `http://localhost:8080/api/quiz-app/${quizAppId}/quizess`,
  list: ({quizAppId}) => `http://localhost:8080/api/quiz-app/${quizAppId}/quizess`,
  update: ({quizAppId, quizId}) => `http://localhost:8080/api/quiz-app/${quizAppId}/quizess/${quizId}`,
  delete: ({quizAppId, quizId}) => `http://localhost:8080/api/quiz-app/${quizAppId}/quizess/${quizId}`
}
export let teachers = {
  list: ({quizAppId}) => `http://localhost:8080/api/quiz-app/${quizAppId}/teachers`,
  add: ({quizAppId}) => `http://localhost:8080/api/quiz-app/${quizAppId}/teachers`,
  delete: ({quizAppId, teacherId}) => `http://localhost:8080/api/quiz-app/${quizAppId}/teachers/${teacherId}`,
}
