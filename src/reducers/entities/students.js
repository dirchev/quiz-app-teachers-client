const DEFAULT_STATE = {
  'S111111111111': { id: 'S111111111111', name: 'Dimitar Mirchev', email: 'dimitar.mirchev96@gmail.com' },
  'S222222222222': { id: 'S222222222222', name: 'Samuel Jackson', email: 'sam.jack@gmail.com' },
  'S333333333333': { id: 'S333333333333', name: 'Peter Pan', email: 'peter.pan@gmail.com' },
  'S444444444444': { id: 'S444444444444', name: 'Juliet McDonalds', email: 'jul@gmail.com' }
}
const studentsEntities = (state = DEFAULT_STATE, action) => {
  return state
}

export default studentsEntities
