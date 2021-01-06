import { AnyAction } from 'redux'
import { AlertState } from '../interfaces'
import { AlertActionType } from '../actions/types'
import { AlertModel } from '../../types'

const initialState: AlertState = []

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case AlertActionType.SET_ALERT: {
      const model: AlertModel = action.payload
      return [...state, model ]
    }
    case AlertActionType.REMOVE_ALERT: {
      const { _id } = action.payload
      return state.filter(alert => alert._id !== _id)
    }
    default: {
      return state
    }
  }
}
