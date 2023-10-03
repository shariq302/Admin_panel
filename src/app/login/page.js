"use client" 
import React, { useState } from 'react'

import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'



function Login() {
  
  const [isLoading, setIsLoading] = useState(false)
  const router=useRouter()
  const api = process.env.NEXT_PUBLIC_LOCAL_API;
  
  // console.log('API ----- ',api)

  async function sumbitData(event) {
    event.preventDefault()
    setIsLoading(true) // Set loading to true when the request starts
    const name = event.target.username.value;
    const pass = event.target.password.value;
    
    // Fetch data from external API
    const body={
      username:name,
      password: pass
    }
    router.push('/dashboard')
    
    // axios.post(`${api}/auth/signin/`,body)
    // .then((res)=>{
    //   console.log("Login Successfully ---",res.data)

    //   res.data.status === false ? (
    //     toast.success(res.data.error),
    //     setIsLoading(false)
        
    //   ) : (
    //     toast.success('Login Successfully'),
    //     router.push('/dashboard'),
    //     event.target.reset(),
    //     setIsLoading(false),
    //     sessionStorage.setItem('Token',res.data.access
    //     )
    //   )
      
    // }).catch((err)=>{
    //   console.log("Login Successfully ---",err)
    //   setIsLoading(false)
    // })
   
    // Pass data to the page via props
  }

  return (
    <div className='bg-slate-50 px-56 sm:pt-24  md:pt-24  lg:pt-10 xl:pt-24 2xl:pt-24 h-screen'>
      {/* sm:text-red-400 md:text-green-600 lg:text-blue-800 xl:text-pink-900 2xl:text-purple-950 */}
    <h1 className=" text-3xl font-semibold w-full	 2xl:text-4xl mb-5">Login Now</h1>

    <div className="md:flex   bg-white    rounded-xl shadow-lg ">
      <div className="flex  sm:w-full md:w-full lg:w-3/5 xl:w-3/5 2xl:w-3/5  justify-center  items-center">
        <form className="bg-white w-screen px-10 py-10 " onSubmit={(e)=>sumbitData(e)}>
          <p className="2xl:text-xl text-sm font-normal text-gray-950 mb-1">Username <span className='text-red-600'>*</span></p>

          <div className="flex items-center  text-gray-400 border-2 py-2 px-3 rounded-lg mb-4">

            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800 " viewBox="0 0 20 20"
              fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd" />
            </svg>
            <input className="pl-2 outline-none border-none text-gray-900 required" required name='username' type="text" placeholder="Username" />
          </div>
          <p className=" 2xl:text-xl text-sm font-normal text-gray-950 mb-1">Password <span className='text-red-600'>*</span></p>

          <div className="flex items-center text-gray-400 border-2 py-2 px-3 rounded-lg">

            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" viewBox="0 0 20 20"
              fill="currentColor">
              <path fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd" />
            </svg>
            <input className="pl-2 outline-none border-none text-gray-900 required" required name='password'  type="password"placeholder="Password" />
         
            
          </div>
        
          <div className="flex justify-between mt-5">
          <span className="text-base ml-2cursor-pointer"><input type='checkbox' className="default:ring-2 "/> Remember me</span>
          <Link className="text-base ml-2 text-blue-500 cursor-pointer mt-1 " href="/forgetPassword" >Forgot Password ?</Link>
          </div>
          <div className="flex justify-end">
             <button type="submit" className="block w-1/5 	justify-between bg-neutral-800 mt-12 py-2 rounded-md text-white font-medium mb-2 " disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Login'}
            </button>
          </div>
        
        </form>
      </div>
      <div className="md:mb-0 w-2/5  sm:hidden md:hidden lg:block xl:block 2xl:block lg:w-2/5">
      <img src="/readylogo.jpg"alt="Phone image" className='w-full h-full' /> 
        
      </div>
    </div>
 
    </div>

  )
}

export default Login