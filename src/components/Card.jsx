import "./card.css";
const lenguajes = [
  {
    id: 1,
    nombre: "bootstrap",
    imagen: "https://i.postimg.cc/zfm32BYj/bootstrap.png",
  },
  {
    id: 2,
    nombre: "HTML",
    imagen: "https://i.postimg.cc/WpSFpT0N/html5.png",
  },
];
function Card() {
  return lenguajes.map((item,index) => {
    return (
      <div className="card" key={index}>
        <h1>{item.nombre}</h1>
        <img  className="imagen"src={item.imagen} alt="" />
      </div>
    );
  });
}
export default Card;
