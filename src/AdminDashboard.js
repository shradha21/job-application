import React from 'react'
import moment from 'moment'
import axios from './config/axios'

class AdminDashboard extends React.Component {
    constructor() {
    super()
    this.state= {
        candidates: [],
        jobTitle: ['Front-End Developer', 'Node.js Developer', 'MEARN Stack Developer', 'FULL Stack Developer'],
        selectedJob: 'Front-End Developer'
    }    
    }

    //-----To get all of the data from the server-----
    componentDidMount() {
        axios.get('/users/application-forms')
        .then((response) => {
            //console.log(response.data)
            const candidates= response.data
            this.setState({
                candidates
            })
        })
        .catch((err) => {
          console.log(err)
        })
    }
    //-------------------------------------------------

    //-------To change the job title-----------------
    changeTitle = (title) => {
        this.setState({
            selectedJob: title
        })
    }
    //---------------------------------------------

    //------To handle the view details------------
    handleViewDetails = (id) => {
        axios.get(`/users/application-form/${id}`)
            .then((response) => {
                const candidate = response.data
                alert(`name - ${candidate.name}`)
            })
            .catch((err)=> {
                console.log(err.message)
            })
        }
        

    
    //--------------------------------------------

    render() {
        return(
            <div>
                <h1>Admin Dashboard</h1>

                {/*Customized Code  */}

                {this.state.jobTitle.map(title => {
                    return <button onClick= {() => {
                        this.changeTitle(title)
                    }}>{title}</button>
                })}


                {/* Long code  */}
                {/* <button onClick= {()=> {
                    this.changeTitle('Front-End Developer')
                }}>Front-End Developer</button>

                <button onClick= {()=> {
                    this.changeTitle('Node.js Developer')
                }}>Node.jS Developer</button>

                <button onClick= {()=> {
                    this.changeTitle('MEARN Stack Developer')
                }}>MEARN Stack  Developer</button>

                <button onClick= {()=> {
                    this.changeTitle('FULL Stack Developer')
                }}>FULL Stack Developer</button>   */}

                <h1>{this.state.selectedJob}s</h1>
                <p>List of candidates applied for {this.state.selectedJob} job</p> 

                <table border= "1px">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Technical Skills</th>
                            <th>Experience</th>
                            <th>Applied Date</th>
                            <th>View Details</th>
                            <th>Update Application Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.candidates.filter(candidate => candidate.jobTitle
                            === this.state.selectedJob).map(candidate => {
                                return (
                                    <tr>
                                        <td>{candidate.name}</td>
                                        <td>{candidate.skills}</td>
                                        <td>{candidate.experience}</td>
                                        <td>{moment(candidate.createdAt).format("DD/MM/YYYY")}</td>

                                        <td><button className= "btn btn-info btn-sm" data-toggle= "modal" data-target= ""
                                        onClick= {()=> {this.handleViewDetails(candidate._id)}}>View Details</button></td>

                                        <td>
                                        {candidate.status === 'applied' ? (
                                            <div>
                                                <button className= "btn btn-success btn-sm">Shortlist</button> 
                                                <button className= "btn btn-danger btn-sm">Reject</button>
                                            </div>
                                         ) :
                                            <div>
                                                <button> {candidate.status} </button> 
                                            </div>
                                        }
                                        </td>
                                    </tr>
                                )
                            
                            })
                        }
                    </tbody>
                </table>

            </div>
        )
    }
}





export default AdminDashboard