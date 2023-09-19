'use client'
import { UserAuth } from './context/AuthContext'
import SignIn from './components/SignIn';
export default function Home() {
  const {user} = UserAuth();
  return (
    <div>
    {!user?
    <SignIn/>
    :
    <main>
      Successfully logged in..
    </main>}
    </div>
  )
}
