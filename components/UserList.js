import userStyles from '../styles/User.module.css'
import UserItem from './UserItem'

const UserList = ({ users }) => {
  return (
    <div className={userStyles.grid}>
      {users.map((user, idx) => (
        <UserItem user={user} key={idx}/>
      ))}
    </div>
  )
}

export default UserList
