import { auth, currentUser } from '@clerk/nextjs/server'
import React from 'react'

export default async function DashboardPage() {
  const { isAuthenticated } = await auth()
  if (!isAuthenticated) {
    return <div>Sing in ti view this page.이 페이지를 보려면 로그인하세요</div>
  }
  const user = await currentUser()
  console.log(user)
  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Dashboard</h1>
      <p className="mb-2">welcome to Dashboard</p>
      <div className="mb-5">
        <p>welcome,{user?.firstName}</p>
        <p>Emall: {user?.primaryEmailAddress?.emailAddress}</p>
        <p>사용자 등록: {user?.createdAt} </p>
      </div>
    </div>
  )
}
