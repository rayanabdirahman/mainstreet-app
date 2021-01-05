import Constants from 'expo-constants'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthenticationActionType } from './types'
import { SignUpModel, SignInModel, UserModel } from '../../types'
import UserApi from '../../api/user.api'

export const signUpUser = (model: SignUpModel) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
  try {
    const token: string = await UserApi.signUp(model)
    // store user token in local storage
    await AsyncStorage.setItem(`${Constants.manifest.extra.LOCALSTORAGE_AUTHORIZATION_TOKEN}`, token)
    dispatch({ type: AuthenticationActionType.SIGN_UP_SUCCESS, payload: token })
    // get user details 
    dispatch(authoriseUser())
  } catch (error) {
    dispatch({ type: AuthenticationActionType.SIGN_UP_FAIL })
    console.log('SIGNUP ERROR: ', error)
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
    dispatch({ type: AuthenticationActionType.SIGN_IN_FAIL })
    console.log('SIGNIN ERROR: ', error)
  }
}

export const signOutUser = () => async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
  try {
    const response = await UserApi.signOut()
    // remove user token from local storage
    await AsyncStorage.removeItem(`${Constants.manifest.extra.LOCALSTORAGE_AUTHORIZATION_TOKEN}`)
    dispatch({ type: AuthenticationActionType.SIGN_OUT_SUCCESS, payload: response })
  } catch (error) {
    dispatch({ type: AuthenticationActionType.SIGN_OUT_FAIL })
    console.log('SIGNOUT ERROR: ', error)
  }
}

export const authoriseUser = () => async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<any> => {
  try {
    // get user token from local storage
    const token = await AsyncStorage.getItem(`${Constants.manifest.extra.LOCALSTORAGE_AUTHORIZATION_TOKEN}`)
    const user: UserModel = await UserApi.authorise(token)
    dispatch({ type: AuthenticationActionType.AUTHORISE_USER, payload: { user, token } })
  } catch (error) {
    dispatch({ type: AuthenticationActionType.AUTHORISE_ERROR })
    console.log('AUTHORISE ERROR: ', error)
  }
}
