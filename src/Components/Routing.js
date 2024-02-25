import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Register from './Register'
import Login from './Login'
import Profile from './Profile'
import UserList from './UserList'

const Routing = () =>{
    return(
        <BrowserRouter>
            {/* <Route> */}
                <Header/>
                <Route exact path ="/" component ={Login}/>
                <Route exact path ="/register" component ={Register}/>
                <Route exact path ="/users" component ={UserList}/>
                <Route path ="/profile" component={Profile}/>
                <Footer/>
            {/* </Route> */}
        
        </BrowserRouter>
    )
}

export default Routing