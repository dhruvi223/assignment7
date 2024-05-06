// AuthContext.js
import React, { createContext, useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import bcrypt from 'bcryptjs-react'
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);


export const AuthProvider = ({ children }) => {

  const login = (email, password, navigate) => {

    const userData = localStorage.getItem('users')
    const userDataj = JSON.parse(userData)
    const user = userDataj.find(user => user.email === email)

  if (user !== null){
    const result = bcrypt.compareSync(password, user.password)
    console.log(result);
    if(result){

      const loggedInuser = {
        email : email,
        password : user.password
      }
      localStorage.setItem('loggedIn', JSON.stringify(loggedInuser))
      localStorage.setItem('isloggedIn', JSON.stringify(true))

      navigate("/");
    }
    else{
      toast.error('password is incorrect')
    }
  }
  else{
     toast.error('email is not registered')
  }

  };

  const loggedIn = JSON.parse(localStorage.getItem("isloggedIn"));

  const signup = (firstname, lastname, email, password, cpassword, navigate) => {
        if(password === cpassword){
        const userData = localStorage.getItem('users')
        const userDataj = JSON.parse(userData)
        const user = userDataj.find(user => user.email === email)
    
        if (user === undefined){
    
               const salt = bcrypt.genSaltSync(10);
               const hashedPassword = bcrypt.hashSync(password, salt)
               console.log(hashedPassword);
               let usersData = JSON.parse(localStorage.getItem('users'))
               usersData.push({
                    firstname : firstname,
                    lastname : lastname,
                    email : email,
                    password : hashedPassword
                    });
                localStorage.setItem('users', JSON.stringify(usersData))
    
                const loggedInuser = {
                    email : email,
                    password : hashedPassword
                  }
                  localStorage.setItem('loggedIn', JSON.stringify(loggedInuser))
                  navigate('/');

                }
                else{
                    toast.error('user is already registered')
                }
                }
            else{
               toast.error(`password and confirm password doesn't match`)
            }

    
}

  const logout = (navigate) => {
    localStorage.setItem("isloggedIn", JSON.stringify(false))
    localStorage.removeItem("loggedIn")
    navigate("/signin")
  };

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout, signup}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;