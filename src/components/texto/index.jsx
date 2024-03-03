import "./styles.css"

const Texto = (props) => {
    return (<div className="texto"><p>Componente Texto dentro del componente App </p>
    <p>Mi nombre es: {props.nombre} {props.apellido} Edad: {props.edad}</p></div>)
  };

  export default Texto