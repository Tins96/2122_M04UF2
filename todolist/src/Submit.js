
function Submit ()
{

	return (

		<button onClick={event => {
				event.preventDefault();
				console.log("Hola");
				
			}
		}>Añadir</button>
	);

}

export default Submit;
