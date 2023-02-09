import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Email from '../atom/Email'
import Password from '../atom/Password'

const LoginSection = () => {
  const router = useRouter()
  const [type, setType] = useState('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const handleChange = (event) => {
    if (event.target.id === 'email') {
      setEmail(event.target.value)
    }
    if (event.target.id === 'password') {
      setPassword(event.target.value)
    }
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      if (type === 'register') {
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
          email,
          password
        })
      }
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        email,
        password
      })
      setEmail('')
      setPassword('')
      router.push('/dashboard')
    } catch (error) {
      setError(error.response.data.message)
    }
  }
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            {(type === "register") ?
              <>Create your account</> :
              <>Sign in to your account</>
            }
          </h1>
          {error ? <p className="mt-6">{error}</p> : <></>}
          <form
            className="space-y-4 md:space-y-6"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
              <Email
                value={email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
              <Password
                value={password}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              {(type === "register") ?
                <>Sign up</> :
                <>Sign in</>
              }
            </button>
            <p className="text-sm font-light text-gray-500">
              {(type === "register") ?
                <a
                  href="#"
                  onClick={(event) => {
                    event.preventDefault()
                    setType('login')
                  }
                  }>Sign in to your account</a> :
                <a
                  href="#"
                  onClick={(event) => {
                    event.preventDefault()
                    setType('register')
                  }
                }>Create your account</a>
              }
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginSection
