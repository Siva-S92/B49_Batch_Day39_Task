import React from 'react'
// import { useNavigate } from 'react-router-dom'
import AssignMentorForm from './AssignMentorForm';
import AddNewStudent from './AddNewStudent';
import AddNewMentor from './AddNewMentor';

function Home() {
    return (
        <>
            <div>
                <div>
                    <nav className="navbar fixed-top navbar-light bg-dark">
                        <a className="navbar-brand fs-2 fw-bold mx-auto p-0 text-white" href="#">Mentors And Students In Guvi</a>
                    </nav>
                </div>

                <div className='container' style={{ marginTop: "5rem" }}>
                    <div className="row">
                        <div className='col-md-6 text-center'>
                            <h2>Students:</h2>
                            <button className='btn border'><a href="https://guvi-task-v8wa.onrender.com/all_students" className='text-decoration-none text-dark'>show all students</a></button>
                        </div>

                        <div className='col-md-6 text-center'>
                            <h2>Mentors:</h2>
                            <button className='btn border'><a href="https://guvi-task-v8wa.onrender.com/all_mentors" className='text-decoration-none text-dark'>show all mentors</a></button>
                        </div>
                    </div>
                </div>

                {/* child components */}
                <AddNewStudent/>
                <AddNewMentor/>
                <AssignMentorForm/>
                
            </div>
        </>
    )
}

export default Home