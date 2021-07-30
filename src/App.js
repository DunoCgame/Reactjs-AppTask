import React from "react";
import {BrowserRouter as Router,   Switch,   Route,   Link,   NavLink } from "react-router-dom";
import logo from './logo.svg';
import './App.css';


import TaskPost from './components/Taskpost';
import NewTask from './components/NewTask';
import UpdateTask from './components/UpdateTask';


function Header(){
	

	return(
		<header className="header">	
		<h1 className="title-header">TaskApp</h1>
		<Link to="/NewTask" className="Link-New-Task">New Task</Link>
		</header>
	)
	
	
}

function HolaMundo(){
	
	return(
	<h1>jijij</h1>
	)
}


function App() {
  return (
    <div className="App">
		
		<Router>
			<Header/>
		
			 <Switch>
				<Route path="/UpdateTask/:id" exact>
					<main className="Section-New-Update">	
							<UpdateTask/>
						</main>						
				</Route>			 
				  <Route path="/NewTask">
					<main className="Section-New-Update">	
							<NewTask/>
						</main>	
				  </Route>  
				  <Route path="/">				
						<main className="Section-Task">	
							<TaskPost/>
						</main>	
				  </Route>
			
			</Switch>
		</Router>
	

    </div>
  );
}

export default App;
