'use client'
import { useUser } from '@clerk/nextjs'
import React from 'react'

export default function DashboardPage() {
  const { isSignedIn, user, isLoaded } = useUser()

  if (!isLoaded) {
    return <div>Loading......</div>
  }

  if (!isSignedIn) {
    return <div>Sign in to view this page.이 페이지를 보려면 로그인하세요</div>
  }
  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Dashboard (client-side)</h1>
      <div className="mb-5">
        <p>use client 지시자 사용</p>
        <p>브라우저에서 useuser() 함수 이용</p>
        <p>welcome, {user.fullName} </p>
        <p>Email: {user.primaryEmailAddress?.emailAddress} </p>
      </div>
    </div>
  )
}
