import NavbarItem from "./NavbarItem";

export default function Navbar() {
  const [active, setActive] = React.useState(false);
  const isOpen = active ? " is-active" : "";
  const toggle = () => {
    setActive(!active);
  };

  return (
    <nav
      role="navigation"
      aria-label="Menu de navegación"
      className={`nav${isOpen}`}
    >
      <header className="nav-header">
        <button
          onClick={toggle}
          className={`hamburger hamburger--collapse${isOpen}`}
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <h3>Menu prueba</h3>
      </header>
      <div className="nav-menu">
        <NavbarItem title="Home" icon="home" />
        <NavbarItem title="About" icon="help-circle" />
        <NavbarItem title="Account" icon="user" />
        <NavbarItem title="Settings" icon="settings" />
        <NavbarItem title="Logout" icon="log-out" />

        <footer className="nav-menu-footer">
          <img src="./img/menu_footer.svg" className="fluid full" />

          <h4 className="nav-menu-footer-title">Enlaces</h4>
          <p className="nav-menu-footer-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            eligendi!
          </p>
        </footer>
      </div>
    </nav>
  );
}
