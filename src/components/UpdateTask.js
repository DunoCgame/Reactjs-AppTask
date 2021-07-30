import React, {useState, useEffect  } from 'react';
import { BrowserRouter as Router, Route, Link, useParams, useHistory } from "react-router-dom";
import "./NewUpdateTask.css";



function UpdateTask(){
	
	const [Title, setTitle] = useState();
	const [SubTitle, setSubTitle] = useState();
	const [Text, setText] = useState(); 
	const [Date, setDate] = useState();
	
	const [Task, setTask] = React.useState([])
	const [token, setToken] = useState();
	
	let history = useHistory();
	const {id} = useParams();

	
	const GetData = async () => {
			
		console.log("el id es", id);
			
		const data = await fetch('http://localhost:8080/Task/'+id)
		const Res = await data.json()

		setTask(Res);
		
		console.log("res",Res)
		
		
	}
	
	React.useEffect(() => {
			GetData()
	},[])
		
		async function Update(info){
			let response = await fetch('http://localhost:8080/Task', {
			method: 'POST',
			headers:{
				'Content-Type': 'application/json;charset=utf-8'
			  },
			  body: JSON.stringify(info)
			});

			let result = await response.json();
	
		}	
	
	    const handleSubmit = async e =>{
			e.preventDefault(); // previene la recarga de la web
			
			const token = await Update({
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
				<input type="text" value={Task.Title} name="title"  onChange={e => setTitle(e.target.value)} required />
				
				<label htmlFor="Title">Sub title</label>
				<input type="text" value={Task.SubTitle} name="subtitle"  onChange={e => setSubTitle(e.target.value)} required />						
				
				<label htmlFor="SubTitle"> Date</label>
				<input type="date" value={Task.Date} onChange={e => setDate(e.target.value)} />
				
				
				<label htmlFor="Task">Task</label>
				<textarea value={Task.Text} onChange={e => setText(e.target.value)} />
				

				<button className="btn-submit"type="submit">Save</button>
			 </div>
		</form>
		
		)
	
	
}
export default UpdateTask;
