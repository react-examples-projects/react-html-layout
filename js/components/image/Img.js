export default function Img({ src, title = "Untitle" }) {
  return (
    <figure className="figure">
      <img src={src} className="fluid full" alt={title} />
      <figcaption>{title}</figcaption>
    </figure>
  );
}
