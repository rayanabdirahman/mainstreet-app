import Constants from 'expo-constants'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthenticationActionType } from './types'
import { SignUpModel, SignInModel, UserModel, AlertTypeEnum } from '../../types'
import UserApi from '../../api/user.api'
import { setAlert } from './alert'

export const signUpUser = (model: SignUpModel) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
  try {
    const token: string = await UserApi.signUp(model)
    // store user token in local storage
    await AsyncStorage.setItem(`${Constants.manifest.extra.LOCALSTORAGE_AUTHORIZATION_TOKEN}`, token)
    dispatch({ type: AuthenticationActionType.SIGN_UP_SUCCESS, payload: token })
    // get user details 
    dispatch(authoriseUser())
  } catch (error) {
    console.log('SIGNUP ERROR: ', error)
    dispatch({ type: AuthenticationActionType.SIGN_UP_FAIL })
    dispatch(setAlert({
      message: error,
      type: AlertTypeEnum.ERROR
    }))
  }
}

export const signInUser = (model: SignInModel) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
  try {
    const token: string = await UserApi.signIn(model)
    // store user token in local storage
    await AsyncStorage.setItem(`${Constants.manifest.extra.LOCALSTORAGE_AUTHORIZATION_TOKEN}`, token)
    dispatch({ type: AuthenticationActionType.SIGN_IN_SUCCESS, payload: token })
    // get user details 
    dispatch(authoriseUser())
  } catch(error) {
    console.log('SIGNIN ERROR: ', error)
    dispatch({ type: AuthenticationActionType.SIGN_IN_FAIL })
    dispatch(setAlert({
      message: error,
      type: AlertTypeEnum.ERROR
    }))
  }
}

export const signOutUser = () => async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
  try {
    const response = await UserApi.signOut()
    // remove user token from local storage
    await AsyncStorage.removeItem(`${Constants.manifest.extra.LOCALSTORAGE_AUTHORIZATION_TOKEN}`)
    dispatch({ type: AuthenticationActionType.SIGN_OUT_SUCCESS, payload: response })
  } catch (error) {
    console.log('SIGNOUT ERROR: ', error)
    dispatch({ type: AuthenticationActionType.SIGN_OUT_FAIL })
    dispatch(setAlert({
      message: error,
      type: AlertTypeEnum.ERROR
    }))
  }
}

export const authoriseUser = () => async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<any> => {
  try {
    // get user token from local storage
    const token = await AsyncStorage.getItem(`${Constants.manifest.extra.LOCALSTORAGE_AUTHORIZATION_TOKEN}`)
    const user: UserModel = await UserApi.authorise(token)
    dispatch({ type: AuthenticationActionType.AUTHORISE_USER, payload: { user, token } })
  } catch (error) {
    console.log('AUTHORISE ERROR: ', error)
    dispatch({ type: AuthenticationActionType.AUTHORISE_ERROR })
  }
}
