import React from 'react';

import Form from './Form';
import Submit from './Submit';
import List from './List';

class TaskForm extends React.Component{
	constructor(props){
		super(props);
	}

	handleSubmit(event){
		event.preventDefault();
		console.log("prueba");
	}

	render ()
	{
		return (
			<form onSubmit={this.handleSubmit}>
				<Form />
				<Submit />
				<List />
			</form>

		);

	}	
}

export default TaskForm;
