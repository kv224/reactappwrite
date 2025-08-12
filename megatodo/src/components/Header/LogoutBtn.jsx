import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

const LogoutBtn = () => {

   const dispatch=useDispatch()
   const logouthandler =()=>{
        authService.logout()
        .then(()=>{
            dispatch(logout())
        })
        .catch(()=>{

        })
        .finally(()=>{

        })
   }  

  return (
    <div>
      <button className='px-2' onClick={logout}>LOGOUT</button>
    </div>
  )
}

export default LogoutBtn
