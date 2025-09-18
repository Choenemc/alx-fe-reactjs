import link  from 'react-router-dom';

const NavBar = () => {
    return (
        <nav style={{ diplay: 'flex', gap: "20px", padding: "15px", backgroundcolor: "#eee" }}>
        <link to="/">Home</link>
        <link to="/add">Add Recipe</link>
        <link to="/search">Favorites</link>
        <link to="/recommendations">recommandations</link>
        </nav>
    )
}

export default NavBar;