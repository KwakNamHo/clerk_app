import React from 'react'
import Link from 'next/link'
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs'

export default function Header() {
  return (
    <div>
      <nav className="bg-red-900 py-4 px-8">
        <div className="flex items-center justify-between container">
          <div className="flex items-center font-bold">
            <Link href="/">
              <div className="text-lg text-white">Clerk App</div>
            </Link>
          </div>
          <div className="flex items-center font-bold">
            <SignedOut>
              <div className="text-gray-300 hover:text-white mx-4">
                <SignInButton />
              </div>
              <div className="text-gray-300 hover:text-white mx-4">
                <SignUpButton />
              </div>
            </SignedOut>
            <SignedIn>
              <div className="flex items-center space-x-4 text-gray-300">
                <Link href="/dashboard">Dashboard-S</Link>
                <Link href="/dashboard-c">Dashboard-C</Link>
                <UserButton afterSignOutUrl="/" />
                <SignOutButton>
                  <button className="hover:text-white">Sign out</button>
                </SignOutButton>
              </div>
            </SignedIn>
          </div>
        </div>
      </nav>
    </div>
  )
}
