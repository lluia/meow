import * as React from 'react'
import Link from 'next/link'
import { Logo, Button } from '.'

export const size = '64px'

export function Navigation({ user }) {
  return (
    <nav className="flex justify-between align-center py-3">
      <Link href="/">
        <Logo className="w-10" />
      </Link>
      <div className="flex justify-between items-center">
        {user ? (
          <>
            <div className="flex items-center mr-8">
              <img src={user.avatar} className="rounded-full w-6" />
              <span className="inline-block ml-3">
                Hi <strong>{user.name}</strong>
              </span>
            </div>
            <Link href="/api/sign-out">
              <Button>Sign-out</Button>
            </Link>
          </>
        ) : (
          <Link href="/api/sign-in">
            <Button>Sign-in</Button>
          </Link>
        )}
      </div>
    </nav>
  )
}
