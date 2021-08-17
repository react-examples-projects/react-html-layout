import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <nav
      role="navigation"
      aria-label="Menu de navegación"
      className="nav"
    >
      <header className="nav-header"></header>
      <div className="nav-menu">
        <NavbarItem title="Home" icon="home" />
        <NavbarItem title="About" icon="help-circle" />
        <NavbarItem title="Account" icon="user" />
        <NavbarItem title="Settings" icon="settings" />
        <NavbarItem title="Logout" icon="log-out" />
      </div>
    </nav>
  );
}
