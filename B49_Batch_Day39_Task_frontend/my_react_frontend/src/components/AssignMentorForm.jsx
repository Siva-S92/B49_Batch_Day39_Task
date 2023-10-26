import React, {useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';


function AssignMentorForm() {
    const navigate = useNavigate();
    const [studentsData, setstudentsData] = useState([]);
    const [mentorsData, setmentorsData] = useState([]);
    useEffect(() => {
        axios.get("https://guvi-task-v8wa.onrender.com/all_students").then((res) => {
            setstudentsData(res.data);
        })

        axios.get("https://guvi-task-v8wa.onrender.com/all_mentors").then((result) => {
            setmentorsData(result.data);
        })
        // console.log(studentsData);
        // console.log(mentorsData);
    }, []);



    const [formData, setformData] = useState({
        studentname: '',
        mentorname: ''
    });

    const handleChange = (e) => {
        setformData({...formData, [e.target.name]: e.target.value})
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        try {
            const response = await axios.post('https://guvi-task-v8wa.onrender.com/student/assign_mentor', formData);
            
            if(response){
                console.log(response.data.message);
                alert(response.data.message);
                location.reload();
            }
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <>

            <div className="container mt-3">
                <h2 className='text-danger text-center'><u>Assign a Mentor to a Student</u></h2>
                <form id="crudForm">
                    <div className="form-group mt-2">
                        <label htmlFor="studentname">Select the StudentName:</label>
                        <select className="w-100 py-1 rounded" id="studentname" name="studentname" onChange={handleChange} defaultValue="none">
                            <option value="none" disabled hidden></option>
                            {studentsData.map((student, index) => (
                                <option key={index} value={student.name}>{student.name}</option>
                            ))}
                            
                        </select>
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="mentorname">Select the MentorName to assign to a student given:</label>
                        <select className="w-100 py-1 rounded" id="mentorname" name="mentorname" onChange={handleChange} defaultValue="none">
                            <option value="none" disabled hidden></option>
                            {mentorsData.map((mentor, index) => (
                                <option key={index} value={mentor.name}>{mentor.name}</option>
                            ))}
                            
                        </select>
                    </div>
                    <button type="button" className="btn  mt-2 px-5 btn-outline-success" onClick={handleSubmit}>Save</button>
                </form>
            </div>
        </>
    )
}

export default AssignMentorForm