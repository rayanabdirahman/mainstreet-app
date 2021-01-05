import axios from 'axios'
import Constants from 'expo-constants'
import buildClient from '../utilities/axios-helper'
import { SignUpModel, SignInModel, UserModel } from '../types'

const API_BASE_URL = `${Constants.manifest.extra.API_URL}/user`

type UserApi = {
  signUp(model: SignUpModel): Promise<string>
  signIn(model: SignInModel): Promise<string>
  signOut(): Promise<string>
  authorise(token: string | null): Promise<UserModel>
}

const UserApi: UserApi = {
  async signUp(model: SignUpModel): Promise<string> {
    try {
      const response  = await axios.post(`${API_BASE_URL}/signup`, model)
      const { token } = response.data.data
      return token
    } catch (error) {
      throw error.response ? error.response.data.error : error.request
    }
  },

  async signIn(model: SignInModel): Promise<string> {
    try {
      const response  = await axios.post(`${API_BASE_URL}/signin`, model)
      const { token } = response.data.data
      return token
    } catch (error) {
      throw error.response ? error.response.data.error : error.request
    }
  },

  async signOut(): Promise<string> {
    try {
      const response  = await axios.post(`${API_BASE_URL}/signout`)
      // returns success message on signout
      const message = response.data.data
      return message
    } catch (error) {
      throw error.response ? error.response.data.error : error.request
    }
  },

  async authorise(token: string | null): Promise<UserModel> {
    try {
      // use axios helper to set request headers
      const response  = await buildClient(token).get(`${API_BASE_URL}/authorise`)
      const { user } = response.data.data
      return user
    } catch (error) {
      throw error.response ? error.response.data.error : error.request
    }
  }
}

export default UserApi
