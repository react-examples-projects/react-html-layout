import Navbar from "../navbar/Navbar";

export default function Layout() {
  return (
    <div className="container">
      <Navbar />
      <main className="content">
        <h1 className="title">Creando mi primer hook de React</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quam
          perferendis minus recusandae odit ipsa amet itaque aut architecto enim
          praesentium quae, temporibus alias inventore incidunt est repellat
          exercitationem tempora.
        </p>

        <img
          src="https://via.placeholder.com/600x300"
          className="fluid full margin"
        />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quam
          perferendis minus recusandae odit ipsa amet itaque aut architecto enim
          praesentium quae, temporibus alias inventore incidunt est repellat
          exercitationem tempora.
        </p>
      </main>
    </div>
  );
}
