const Header = () => {
    return (
        <header>
           <h1 className="header__titulo">Animales</h1>
           <nav>
                <ul>
                    <li><a href="#acuaticos">Acuáticos</a></li>
                    <li><a href="#aereos">Aéreos</a></li>
                    <li><a href="#terrestres">Terrestres</a></li>
                </ul>
           </nav>
        </header>
    )
}
export default Header