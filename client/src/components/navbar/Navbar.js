import './Navbar.css';

function Navbar() {
  return (
    <div>
      <header>
    <h1>Buy-Sell Platform</h1>
    <nav>
      <a href="/">Home</a>
      <a href="/catalog">Catalog</a>
      <a href="/login">Login</a>
      <a href="/register">Register</a>
    </nav>
  </header> 
    </div>  
  );
};

export default Navbar;