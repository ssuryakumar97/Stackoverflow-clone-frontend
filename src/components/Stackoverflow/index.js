import React, { useEffect, useState } from "react";
import './index.css';
import Sidebar from './Sidebar';
import Main from './Main';
import axios from "axios";


function Index(){

    const [ questions, setQuestions ] = useState([]);
    const url = "https://stackoverflow-clone-3m29.onrender.com"

    useEffect(() => {
        const getQuestion = async() =>{
        await axios.get(`${url}/api/question`).then((res) => {
            console.log(res.data)
            setQuestions(res.data.reverse())
        }).catch((err) => {
            console.log(err)
        })
    }
    getQuestion();
    },[])

    return (
        <div className='stack-index'>
            <div className='stack-index-content'>
                <Sidebar />
                <Main questions = {questions} />
            </div>
        </div>
    )
}

export default Index;
