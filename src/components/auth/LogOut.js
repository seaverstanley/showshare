import React from 'react'
import { Component } from "react"


class Logout extends Component{
    logout() {
        localStorage.clear();
        window.location.href = '/';
    }

    render(){
        return(
            <div>
            
            </div>
        )
    }
}

export default Logout;