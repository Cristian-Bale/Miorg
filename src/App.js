import { useState } from 'react';
import {v4 as uuid} from "uuid"
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] =useState(false)
  const [colaboradores, actualizarColaboradores] =useState ([{
    id: uuid(),
    equipo: "Front End",
    foto:"https://github.com/harlandlohora.png",
    nombre:"Hardland Lohora",
    puesto:"Instructor",
    fav:true
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto:"https://avatars.githubusercontent.com/u/91544872?v=4",
    nombre:"Genesys Rondón",
    puesto:"Desarrolladora de software e instructora ",
    fav:true
  },
  {
    id: uuid(),
    equipo: "Deveops",
    foto:"https://avatars.githubusercontent.com/u/91544872?v=4",
    nombre:"Genesys Rondón",
    puesto:"Desarrolladora de software e instructora ",
    fav:false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto:"https://avatars.githubusercontent.com/u/91544872?v=4",
    nombre:"Genesys Rondón",
    puesto:"Desarrolladora de software e instructora ",
    fav:false
  },
  {
    id: uuid(),
    equipo: "Data Science",
    foto:"https://github.com/JeanmarieAluraLatam.png",
    nombre:"Jean Marie Quijada",
    puesto:"Instructora",
    fav:true
  },
  {
    id: uuid(),
    equipo: "Deveops",
    foto:"https://github.com/JeanmarieAluraLatam.png",
    nombre:"Jean Marie Quijada",
    puesto:"Instructora",
    fav:true
  },
  {
    id: uuid(),
    equipo: "Móvil",
    foto:"https://github.com/JoseDarioGonzalezCha.png",
    nombre:"José Gonzalez",
    puesto:"Dev Fullstack",
    fav:false
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto:"https://github.com/harlandlohora.png",
    nombre:"Hardland Lohora",
    puesto:"Diseñador",
    fav:true
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto:"https://github.com/JoseDarioGonzalezCha.png",
    nombre:"José Gonzalez",
    puesto:"Dev Fullstack",
    fav:true

  },
  ])

  const [equipos,actualizarEquipos] =useState ([
      {
        id: uuid(),
        titulo:"Programación",
        colorPrimario:"#57C278",
        colorSecundario:"#D9F7E9"
      },
      {
        id: uuid(),
        titulo:"Front End",
        colorPrimario:"#82CFFA",
        colorSecundario:"#E8F8FF"
      },
      {
        id: uuid(),
        titulo:"Data Science",
        colorPrimario:"#A6D157",
        colorSecundario:"#F0F8E2"
      },
      {
        id: uuid(),
        titulo:"Deveops",
        colorPrimario:"#E06B69",
        colorSecundario:"#FDE7E8"
      },
      {
        id: uuid(),
        titulo:"UX y Diseño",
        colorPrimario:"#DB6EBF",
        colorSecundario:"#FAE9F5"
      },
      {
        id: uuid(),
        titulo:"Móvil",
        colorPrimario:"#FFBA05",
        colorSecundario:"#FFF5D9"
      },
      {
        id: uuid(),
        titulo:"Innovación y Gestión",
        colorPrimario:"#FF8A29",
        colorSecundario:"#FFEEDF"
      },
  
  ]
  )

 
  //Ternario --> condicion ? seMuestra : noseMuestra
  // condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador 

  const registrarColaborador = (colaborador) => {
    console.log("nuevo colaborador", colaborador)
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter ((colaborador)=> colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }



  //Actualizar color de equipo
  const actualizarColor = (color,id) => {
    console.log("actualizar:", color, id)
    const equiposActualizados = equipos.map((equipo) =>{
      if(equipo.id === id){
        equipo.colorPrimario = color
    }
    return equipo
  })
  actualizarEquipos(equiposActualizados)
  }


  //Crear equipo
  const crearEquipo = (nuevoEquipo) =>{
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos,{...nuevoEquipo, id:uuid()}])
  }
  
  const like = (id) => {
    console.log("like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador)=> {
      if(colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    actualizarColaboradores(colaboradoresActualizados)
  }


  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}
      {
        mostrarFormulario && <Formulario
            equipos={equipos.map((equipo)=>equipo.titulo)} 
            registrarColaborador = {registrarColaborador}
            crearEquipo={crearEquipo}
          />
      }
    
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      
      {
        equipos.map( (equipo) => <Equipo 
        datos={equipo}
        key={equipo.titulo}
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador ={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
        />
        )
      }

      <Footer/>

    </div>
  );
}

export default App;
