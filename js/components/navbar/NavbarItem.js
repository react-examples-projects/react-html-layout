export default function NavbarItem({ title = "Untitle", icon = "" }) {
  return (
    <a className="nav-item">
      <img src={`./icons/${icon}.svg`} alt={title} className="nav-icon" />
      {title}
    </a>
  );
}
