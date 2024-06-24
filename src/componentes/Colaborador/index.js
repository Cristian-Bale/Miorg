import "./Colaborador.css"
import { MdDeleteForever,} from "react-icons/md";
import { FaHeart,FaRegHeart  } from "react-icons/fa6";

const Colaborador = (props) => {
    const {nombre, puesto, foto, equipo, id, fav} = props.datos
    const {colorPrimario, eliminarColaborador,like} = props

    //(función ternaria...) condición ? verdadero : falso

    return <div className="colaborador">
    <MdDeleteForever className="eliminar" onClick={() => eliminarColaborador(id)}/>
        <div className="encabezado"style={{backgroundColor:colorPrimario}}>
            <img src={foto} alt={nombre}/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav?<FaHeart color="red"onClick={()=>like(id)}/> : <FaRegHeart onClick={()=>like(id)}/>}

           
        </div>
    </div>
}

export default Colaborador