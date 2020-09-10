import React from 'react'
import axios from 'axios'
import './style.css'

class UsersForm extends React.Component {
    constructor() {
    super()
    this.state= {
        name: '',
        email: '',
        phone: '',
        jobTitle: '',
        experience: '',
        skills: ''
    }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault() 
        const formData= {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            jobTitle: this.state.jobTitle,
            experience: this.state.experience,
            skills: this.state.skills
        }
        //console.log(formData)
        axios.post('http://dct-application-form.herokuapp.com/users/application-form',formData)
        .then((response) => {
            if(response.data.hasOwnProperty('error')){
                alert(response.data.message)
            }else {
                alert('Your application has been submitted')
                //to clear the form   
                this.setState({
                    name: '',
                    email: '',
                    phone: '',
                    jobTitle: '',
                    experience: '',
                    skills: ''
                }) 
            }
        })
    }

    render() {
        return (
            <div className= "contain">
                <h1>Job Application Form</h1>
            <div className= "container">

                    <form className= "form-container"   onSubmit= {this.handleSubmit}>
                    
                    <div className= "form-group">
                    <label htmlFor= "fullName" className= "title">Full name</label>
                        <input type= "text"
                               name= "name" 
                               value= {this.state.name} 
                               onChange= {this.handleChange} 
                               id= "fullName" 
                               className= "form-control"
                               autoComplete= "off"
                             /> 
                    </div>

                    <div className= "form-group"> 
                    <label htmlFor= "email">Email address</label>
                        <input type= "text"
                               name= "email"
                               value= {this.state.email}
                               onChange= {this.handleChange}
                               id= "email"
                               className= "form-control"
                               placeholder= "example@email.com"    
                               autoComplete= "off"
                        /> 
                    </div>    

                    <div className= "form-group">
                    <label htmlFor= "phone">Contact Number</label>
                        <input type= "text"
                               name= "phone"
                               value= {this.state.contact} 
                               onChange= {this.handleChange} 
                               className= "form-control"
                               placeholder= "+91-9875656789"
                               id= "phone" 
                               autoComplete= "off"    
                        />
                    </div>    

                    <div className= "form-group">
                    <label>Applying for job</label>
                          <select value= {this.state.jobTitle} name= "job" onChange= {this.handleChange} className= "form-control" >
                              <option value= "">---select----</option>
                              <option value= "Front End Developer">Front-End Developer</option>
                              <option value= "Node JS Developer">Node.jS Developer</option>
                              <option value= "MEARN Stack Developer">MEARN Stack  Developer</option>
                              <option value= "FULL Stack Developer">FULL Stack Developer</option>
                          </select>
                    </div>
                        
                    <div className= "form-group">
                    <label htmlFor= "experience">Experience</label>
                        <input type= "text" 
                               name= "experience"
                               value= {this.state.experience}
                               onChange= {this.handleChange} 
                               id= "experience" 
                               className= "form-control"
                               placeholder= "Experience (2 years, 3 months)"  
                               autoComplete= "off"  
                        />  
                    </div>
                        
                    <div className= "form-group">
                    <label>Technical skills</label>
                        <textarea htmlFor= "skills" 
                            value= {this.state.skills}
                            name= "skills"
                            onChange= {this.handleChange}
                            className= "form-control"
                            id= "skills"
                            placeholder= "Technical Skills"
                        ></textarea>   
                    </div>
                        
                    <input type= "submit" value= "Send Application"  className= "form-control btn btn-info"/>

                    </form>
                    </div>
               </div>
              
        )
    }
}


export default UsersForm