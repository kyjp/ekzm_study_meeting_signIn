import { useRouter } from 'next/router'
import { useQueryClient } from "@tanstack/react-query";
import { memo } from 'react';
import axios from 'axios';

const Header = memo(({
  children
}) => {
  const router = useRouter()
  const queryClient = useQueryClient()
  const logout = async () => {
    queryClient.removeQueries(['user'])
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`)
    router.push('/')
  }
  return (
    <header className="w-full mb-8">
      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="/" className="no-underline hover:underline">
                <span className="font-mono font-extrabold text-xl">Ekzm Study Meeting</span>
              </a>
            </div>
            <div className="items-center justify-end flex flex-1 lg:w-0">
              <div className="flex items-center">
                <div className="p-3 shadow-sm bg-slate-400 w-3 h-3 rounded-full" />
                <div className="ml-2 inline-block p-0 m-0 leading-4">
                  {children}
                </div>
              </div>
              <button
                onClick={logout}
                type="button"
                className="ml-10 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 hover:cursor-pointer"
              >Logout</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
})

export default Header
