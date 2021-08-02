import React, {useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, useParams, useHistory } from "react-router-dom";

import "./TaskPost.css";


function TaskPost(){
	
	const [error, setError] = useState(null);
	const [Task, setTask] = useState([]);
	let history = useHistory();
	
    const fetchData = async () => {
		
		const data = await fetch('http://localhost:8080/Task')
		const Res = await data.json()
		
		const limit = 6; //limite de datos
		// setTask(Res.slice(0, limit))
		setTask(Res)
				
    }
		
		
	React.useEffect(() => {
			fetchData()
			
		},[])
	

		async function Delete(id){
				await fetch('http://localhost:8080/Task/'+id,{
					method:'DELETE',
				})
				.then(res =>  res.json()) // or  res.text())
				.then(res => console.log(res))
				
				console.log("Delete Task",id);
				await fetchData();
				
			}	
  
	return(


		Task.map(item => (
			
				<div key={item.id} className="Containne_Task" >
					<hgroup className="Containner_Header_Task">
						<h2 className="title_task">{item.id}</h2>
						<h2 className="title_task">{item.Title}</h2>					
					</hgroup>
					<h4 className="Subtitle_task">{item.SubTitle}</h4>
					<h4 className="Subtitle_task">{item.Date}</h4>
					<p className="Text_task">
								{item.Text}
					</p>
					
					<div className="containner-btn-task">
						<button className="btn Delete"
								onClick={()=>{
													
										Delete(item.id);
										
									
								}}
							>Borrar</button>
						<button className="btn  Update" 				
									onClick={()=>{
											
											history.push("/UpdateTask/"+item.id);
									
									}} 	
						>Update</button>
					</div>
				</div>
				
			))
	)
}

export default TaskPost;