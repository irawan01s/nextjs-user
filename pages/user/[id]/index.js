import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios'
import {server} from '../../../config/index'

function user ({user}) {
  const router = useRouter()
  const deleteUser = async (e) => {
    e.preventDefault();
    const id = router.query.id
    const ask = confirm('Are you sure delete this data?')
    
    if (ask) {
      const uri = `${process.env.API_URI}/users`
      await axios.delete(`${uri}/${id}`)
      router.push('/user')
    }
  }
  return (
    <>
      <Head>
        <title>{user.name}</title>
      </Head>
      <h2>{user.name}</h2>
      <p>{user.userName}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.address}</p>
      <p>{user.birthPlace}, {user.birthDate}</p>
      <br />
      <Link href='/user'>
        <button>Go Back</button>
      </Link>
      <br />
      <button onClick={deleteUser.bind(this)}>&times; Delete</button>
    </>
  )
}

export async function getServerSideProps (contex) {
  const uri = server
  const res = await axios.get(`${uri}/users?id=${contex.params.id}`)
  const user = res.data.data[0]

  if (!user) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      user: user
    }
  }
}

export default user
