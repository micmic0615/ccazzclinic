
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import Modal from 'Reducers/Modal.js'

export default combineReducers({
  routing: routerReducer,
  Modal,
});