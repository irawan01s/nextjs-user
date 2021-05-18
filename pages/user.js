import Head from 'next/head'
import axios from 'axios'
import UserList from '../components/UserList'

const  User = ({users}) => {
  return (
    <div>
      <Head>
        <title>Users</title>
      </Head>
      <UserList users={users}/>
    </div>
  )
}

export const getServerSideProps = async () => {
  const uri = process.env.API_URI
  const res = await axios.get(`${uri}/users`)
  const users = res.data.data
  console.log(uri)

  if (!users) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      users: users
    }
  }
}

export default User
