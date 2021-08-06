
import React, { Component } from 'react'

import './App.css';
import Contenedor from './componentes/Contenedor';
import Header from './componentes/Header'
import Login from './componentes/Login';
import Welcome from './componentes/Welcome';
import Footer from './componentes/Footer';

class App extends Component{

  constructor(){
    super()
    this.state={
     nombre:"",
     apellido:"",
     ocultar:"",
     mostrar:"",
     ocultarMostrar:"d-md-none",
     ocultarPregunta:"d-md-none"


    }
   
 
  }
  
  obtenerDatos=(nombre,apellido)=>{
       this.setState({
         nombre,
         apellido
       })
  }

 mostrarElemento=(ocultarMostrar)=>{
   this.setState({
    ocultarMostrar
   })
 }
 mostarPregunta=(ocultarPregunta)=>{
   this.setState({
     ocultarPregunta
   })
 }
  


  render(){
    return(
     <React.Fragment>
       
       <Header nombre={this.state.nombre} apellido={this.state.apellido}/>
       <Login obtenerDatos={this.obtenerDatos} mostrarElemento={this.mostrarElemento} />
       <Welcome nombre={this.state.nombre} apellido={this.state.apellido} classOcultarMostrar={this.state.ocultarMostrar} mostrarElemento={this.mostrarElemento} mostarPregunta={this.mostarPregunta} />
       <Contenedor  ocultarPregunta={this.state.ocultarPregunta}/>

        <Footer/>
   
   </React.Fragment>
      );
  }
  
}

export default App;