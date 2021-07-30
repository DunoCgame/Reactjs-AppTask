import React, {useState, useEffect  } from 'react';
import { BrowserRouter as Router, Route, Link, useParams, useHistory } from "react-router-dom";

import "./NewUpdateTask.css";

function NewTask(){
		
	const [Title, setTitle] = useState();
	const [SubTitle, setSubTitle] = useState();
	const [Text, setText] = useState(); 
	const [token, setToken] = useState();
	const [Date, setDate] = useState();
	
	let history = useHistory();

		async function NewTask(info){
			 
			let response = await fetch('http://localhost:8080/Task', {
			method: 'POST',
			headers:{
				'Content-Type': 'application/json;charset=utf-8'
			  },
			  body: JSON.stringify(info)
			});
		}
	
	  const handleSubmit = async e => {
			e.preventDefault(); // previene la recarga de la web
		
		
		// console.log(
			// Title+" "+
				// SubTitle+" "+
				// Date+" "+Text
		// );
		
			const token = await NewTask({
				Title,
				SubTitle,
				Date,
				Text
			});	
			
			history.push("/");
		
			
		}
	
	return(
		<form className="form-Task" onSubmit={handleSubmit}> 		
			 <div className="container">
			 
				<label htmlFor="Title">Title</label>
				<input type="text" placeholder="Title" name="title"  onChange={e => setTitle(e.target.value)} required />
				
				<label htmlFor="SubTitle"> Sub Title</label>
				<input type="text" placeholder="SubTitle" name="subtitle"  onChange={e => setSubTitle(e.target.value)} required />
				
				<label htmlFor="SubTitle"> Date</label>
				<input type="date" onChange={e => setDate(e.target.value)} />
						
				<label htmlFor="Task">Task</label>
				<textarea onChange={e => setText(e.target.value)} />
				
				<button className="btn-submit"type="submit">Save</button>
			
			</div>
		</form>
	)
	
	
}
export default NewTask;
