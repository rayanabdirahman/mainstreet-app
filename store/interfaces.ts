import { Store, User, UserRole } from '../domain'

export type SessionState = {
  token: string | null,
  isAuthenticated: boolean,
  loading: boolean,
  role: UserRole | null
  user: User | Store | null
}
