import React from 'react'
import Image from 'next/image'

const Login = () => {
  return (
    
    <>
    
    <div className="grid mt-0 mr-auto mb-0 ml-auto grid-cols-1 lg:max-w-screen-xl gap-0 lg:grid-cols-12">
    <div className="w-full mt-6 mr-auto mb-0 ml-auto pt-4 pr-4 pb-4 pl-4 col-span-1 lg:col-span-4 xl:p-12 sm:w-2/4
        lg:w-full">
      <div className="flex items-center justify-start ">
        <Image 
         width={100}
         height={100}
        src="/next.svg" className="w-10 h-auto" alt=''/>
      </div>
      <p className="font-light text-xl text-gray-800 mt-6 mr-0 mb-4 ml-0 text-left">Log in to your account</p>
      <div className="pt-0 pr-0 pb-1 pl-0 space-y-4">
        <div className="block">
          <p className="text-gray-700 font-medium text-xs mt-0 mr-0 mb-1 ml-0 block">Your Email</p>
          <input type="email" placeholder="Ex. james@bond.com" className="w-full rounded-md border-2 hover:border-purple-700
              pt-2 pr-3 pb-2 pl-3"/>
        </div>
        <div className="block">
          <p className="text-gray-700 font-medium text-xs mt-4 mr-0 mb-1 ml-0 block">Your Password</p>
          <input type="password" placeholder="••••••••" className="w-full rounded-md border-2 hover:border-purple-700 pt-2
              pr-3 pb-2 pl-3"/>
        </div>
        <div className="flex mt-4 mr-0 mb-0 ml-0 items-center justify-between">
          <div className="flex items-center">
            <input type="checkbox"/>
            <p className="text-gray-700 font-medium w-20 text-xs mt-0 mr-4 mb-0 ml-2 block cursor-pointer">Remember me</p>
          </div>
          <input type="submit" className="rounded-md w-full pt-2.5 pr-3.5 pb-2.5 pl-3.5 text-white bg-blue-500
              hover:bg-blue-600"/>
        </div>
      </div>
      <div className="mt-6 mr-0 mb-6 ml-0 space-y-2">
        <p className="text-xs text-gray-600 inline"> Dont have an account?</p>
        <p className="text-xs inline text-purple-700 hover:text-black">Create an account</p>
        <a className="text-xs mt-2 mr-0 mb-0 ml-0 block text-purple-700 hover:text-black">Forgot password?</a>
        <a className="text-xs mt-3 mr-0 mb-0 ml-0 block text-purple-700 hover:text-black">Privacy & Terms</a>
      </div>
    </div>
    <div className="col-span-1 lg:col-span-8 h-full">
      <Image 
      width={100}
      height={50}
      src="/log.jpg" unoptimized alt='' className="object-cover min-h-full bg-gray-100 w-full h-full"/>
    </div>
  </div>
    
    </>
    
    )
}

export default Login