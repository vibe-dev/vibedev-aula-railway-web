import type { NextPage } from 'next'

import React from 'react'

const Home: NextPage = () => {
  const [users, setUsers] = React.useState<any[]>([])

  React.useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3333/')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  if(!users) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <h2>{user.email}</h2>
        </div>
      ))}
    </div>
  )
}

export default Home
