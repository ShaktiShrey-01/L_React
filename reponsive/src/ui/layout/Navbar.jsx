import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeTheme } from '../../features/themeslice'
const Navbar = () => {
  const dispatch = useDispatch()
  const handleThemeChange = () => {
    dispatch(changeTheme())
  }
  return (
    <div className="w-full h-20 bg-white/10 backdrop-blur-md border-b border-white/10 p-1 bg-gradient-to-r from-blue-500/80 to-purple-500/80">
      <div className="w-full h-full flex justify-center gap-9">
        <div className="w-1/2 h-full flex items-center flex-row gap-2 pl-6">
          <h1 className="text-2xl font-bold text-white">User Management</h1>
          <h2 className="text-lg font-medium text-white/80">Manage your users efficiently</h2>
        </div>

        <div className="w-1/2 h-full flex flex-row-reverse items-center justify-content-end gap-2 pr-6">
          <button className="px-6 py-3 bg-white/15 text-white rounded-lg hover:bg-white/25 transition-colors duration-300">
            Add User
          </button>
          <button className="px-6 py-3 bg-white/15 text-white rounded-lg hover:bg-white/25 transition-colors duration-300">
            Add User
          </button>
          <button className="px-6 py-3 bg-white/15 text-white rounded-lg hover:bg-white/25 transition-colors duration-300" onClick={handleThemeChange}>
            Change Theme
          </button>
 

        </div>
      </div>
    </div>
  )
}

export default Navbar
