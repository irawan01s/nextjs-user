import {server} from '../../../config/index'
import Head from 'next/head'
import Link from 'next/link'
const user = ({user}) => {
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
      <Link href='/user'>Go Back</Link>
    </>
  )
}

export const getServerSideProps = async (contex) => {
  const uri = server
  const res = await fetch(`${uri}?id=${contex.params.id}`)
  const user = await res.json()

  if (!user) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      user: user.data[0]
    }
  }
}

export default user
