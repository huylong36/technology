import Cookies from 'js-cookie'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route } from 'react-router'
import Banner from '../banner'
import { loginUser } from '../header/auth/authSlice'
import LoginForm from '../header/auth/login'
import { RegisterForm } from '../header/auth/register'
import Header from '../header/header'
import LayoutAdmin from './admin'
import Client_Page from './user_page'

const Layout = () => {
    const dispatch = useDispatch()
    const user_ = useSelector((state) => state.user);
  useEffect(() => {
    const userInfo = Cookies.get("user")
      ? JSON.parse(Cookies.get("user") || "")
      : null;
      dispatch(loginUser(userInfo));
  }, []);
    return (
        <div>
            {
                user_.user?.userRole === 1 ? <LayoutAdmin/> : <Client_Page/>
            }
            


        </div>
    )
}

export default Layout
