import { UserModel, UserRole } from '../types'

export type SessionState = {
  token: string | null,
  isAuthenticated: boolean,
  loading: boolean,
  role: UserRole | null
  user: UserModel | null
}
