import MenuItem from './MenuItem';

function Menu ()
{
	return (
<nav>
<ul>
<MenuItem text="HomePage" url="/" />
<MenuItem text="Curriculum" url="/cv" />
<MenuItem text="Contacto" url="/contact" />
</ul>
</nav>
	);
}


export default Menu;
