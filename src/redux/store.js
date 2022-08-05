import {createStore, combineReducers} from 'redux';
import reducerCourses from './reducers/reducerCourses';

const rootReducers = combineReducers({
  courses: reducerCourses,
});
const store = createStore(rootReducers);

export default store;
