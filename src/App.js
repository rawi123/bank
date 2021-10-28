import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { getUsers } from './api/api'
import Header from './header/Header'
import Login from './Login.register/Login'
import Form from "./Login.register/Form"
import Transaction from "./Transaction/Transaction"
import RegisterForm from './Login.register/RegisterForm'
import Account from './Account/Account'
import Home from './Home/Home'
import "./app.css"

export default function App() {
    const [loggedUser, setLoggedUser] = useState(JSON.parse(sessionStorage.getItem("user"))||{})//user obj
    const [users, setUsers] = useState([])//all users

    useEffect(() => {
        (async function () {
            setUsers((await getUsers()).data)
        }())
    }, [])

    const handelLogin = (user) => { 
        setLoggedUser(user);
        sessionStorage.setItem("user",JSON.stringify(user))
    }

    const updateActive=(user)=>{
        setLoggedUser(user);
        sessionStorage.setItem("user",JSON.stringify(user));
    }

    const handelLogOut = () => { 
        sessionStorage.clear()
        setLoggedUser({});
    }

    const handelRegister=(temp)=>{
        setUsers([...users,temp]);
    }

    const handleTransaction=(user)=>{
        setLoggedUser(user)
    }


    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header logedInProp={loggedUser} handelLogOutCB={handelLogOut} />
                    <Switch>
                        <Route exact path="/login">
                            <Login  Children={<Form usersProp={users} user={loggedUser} handelLoginCB={handelLogin} />} />{/*login*/}
                            
                        </Route>
                        <Route exact path="/">
                            <Home user={loggedUser}/>
                        </Route>
                        <Route exact path="/register">
                            <Login Children={<RegisterForm handelRegisterCB={handelRegister} usersProp={users}/>} />{/*register*/}
                        </Route>
                        <Route exact path="/account">
                            <Account updateActive={updateActive} selectedUser={loggedUser}/>
                        </Route>
                        <Route exact path="/transaction">
                            <Transaction  returnedUser={handleTransaction} user={loggedUser} users={users}/>
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}
