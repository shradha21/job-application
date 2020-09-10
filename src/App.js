import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import ApplicationForm from './ApplicationForm'
import AdminDashboard from './AdminDashboard'
import 'bootstrap/dist/css/bootstrap.min.css'


function App(){
    return (
        <BrowserRouter>
        <div>
            
            <Route path= "/"  component= {ApplicationForm} exact= {true} />
            <Route path= "/admin" component= {AdminDashboard} />
            
        </div>
        </BrowserRouter>
    )
}


export default App