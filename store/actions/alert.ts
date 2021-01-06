import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'
import { AlertActionType } from './types'
import { AlertModel } from '../../types'

export const setAlert = (model: AlertModel) => (dispatch: ThunkDispatch<{}, {}, AnyAction>): void => {
  const _id = uuidv4()
  dispatch({ type: AlertActionType.SET_ALERT, payload: { ...model, _id } })
  // remove alert after 4 seconds
  setTimeout(() => dispatch({ type: AlertActionType.REMOVE_ALERT, payload: { _id } }), 4000)
}
