// AuthContext.js
import React, { createContext, useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import bcrypt from 'bcryptjs-react'
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);


export const AuthProvider = ({ children }) => {
  const [isloggedIn, setIsloggedIn] = useState('');
  const [username, setUsername] = useState();

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


      setIsloggedIn(true)
      setUsername(username)
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
                  setIsloggedIn(true)
                  navigate('/');
                  setUsername(firstname)

                }
                else{
                    toast.error('user is already registered')
                }
                }
            else{
               toast.error(`password and confirm password doesn't match`)
            }

    
}




  const logout = () => {
    setIsloggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isloggedIn, login, logout, signup, username }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
// export const useAuth = () => {
//   const context = React.useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };

export default AuthContext;