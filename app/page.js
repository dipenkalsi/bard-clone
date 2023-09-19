'use client'
import { UserAuth } from './context/AuthContext'
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
export default function Home() {
  const {user} = UserAuth();
  return (
    <div>
    {!user?
    <SignIn/>
    :
    <main>
      <Navbar/>
    </main>}
    </div>
  )
}
