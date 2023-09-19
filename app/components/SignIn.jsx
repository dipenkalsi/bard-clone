import React from 'react'
import { Button } from '@material-tailwind/react';
import { UserAuth } from '../context/AuthContext';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import GoogleIcon from '@mui/icons-material/Google';
const SignIn = () => {
    const {googleSignIn} = UserAuth();
    const handleSignIn = async() =>{
        try{
          await googleSignIn()
        }catch(err){
          console.log(err);
        }
      }
  return (
    <div className='h-screen w-screen flex items-center justify-center flex-col space-y-3'>
        <div className='flex items-center justify-center space-x-3 text-6xl'>
            <AutoAwesomeIcon color='white' fontSize='inherit'/>
            <h1 className='text-4xl'>Google <span className='font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Bard</span></h1>
        </div>
        <Button onClick={handleSignIn} className='flex items-center justify-center space-x-2 hover:text-blue-100  rounded transition bg-gradient-to-r from-purple-400 to-pink-600 font-normal'><span>Sign in with</span> <GoogleIcon fontSize='small'/></Button>
        <div className='fixed bottom-0 py-3 px-3 text-xs text-gray-500'>Clone by Dipen Kalsi &copy;, All rights reserved</div>
    </div>
  )
}

export default SignIn
