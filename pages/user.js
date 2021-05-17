import Head from 'next/head'
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

export const getStaticProps = async () => {
  const uri = process.env.API_URI
  const res = await fetch(uri)
  const users = await res.json()

  if (!users) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      users: users.data
    }
  }
}

export default User
