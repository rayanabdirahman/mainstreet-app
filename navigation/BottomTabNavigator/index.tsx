import { useSelector } from 'react-redux'
import { State } from '../../store'
import { SessionState } from '../../store/interfaces'
import { UserRole } from '../../domain'
import StoreNavigation from './store.navigator'
import BuyerNavigation from './buyer.navigator'

const BottomTabNavigator = () => {
  const { role } = useSelector<State, SessionState>(state => state.session)
  return role === UserRole.STORE ? StoreNavigation() : BuyerNavigation()
}

export default BottomTabNavigator