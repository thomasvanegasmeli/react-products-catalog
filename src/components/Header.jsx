function Header() {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Meli Catalog home">
          <img src="/imgs/mercado-libre-logo.png" alt="Mercado Libre" />
          <span>Products Catalog</span>
        </a>
        <ul className="nav-links">
          <li><a href="#products">Products</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Headercd
