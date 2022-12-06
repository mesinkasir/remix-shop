import {Link } from "@remix-run/react";
import Logo from '~/data/img/logo.svg';
import shop from '~/data/Home.json';
function Header() {
  return (
    <header className="container">
	<div className="col-md-12 p-3 text-center">
     <h1><strong><Link to="/">
	<img className="img-fluid rounded-circle" width="40" height="40" alt="website development" src={Logo}/><br/>{shop.title}</Link></strong></h1>
	 <h2 className="lead">{shop.description}</h2>
	 <nav className="nav justify-content-center bg-dark rounded">
	 <Link className="nav-link text-white" to="/">Home</Link>
	 <Link className="nav-link text-white" to="/shops">Shop</Link>
	 <Link className="nav-link text-white" to="/login">Login</Link>
	 </nav>
	 </div>
    </header>
  );
}

export default Header;