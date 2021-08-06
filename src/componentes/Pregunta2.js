import React, { Component } from 'react';

class Pregunta2 extends Component{
    constructor(){
    
        super()
        this.state={
         
        }
        
        this.pre1=React.createRef();
        this.pre2=React.createRef();
        this.pre3=React.createRef();
      }
      
    enviarRespuesta=()=>{
        let respuesta1=this.pre1.current.value;
        this.props.obtenerRespuesta2(respuesta1)
    }
    enviarRespuesta2=()=>{
        let respuesta1=this.pre2.current.value;
        this.props.obtenerRespuesta2(respuesta1)
    }
    enviarRespuesta3=()=>{
        let respuesta1=this.pre3.current.value;
        this.props.obtenerRespuesta2(respuesta1)
    }
    render(){
        let clase=`container ${this.props.ocultarPregunta} ${this.props.mostrarPregunta}`;
        return(
    
            <div className= {clase} >
     
              <h3 className="indicador">Pregunta 2 de 9</h3> 
                    <article className="col-md-12">
                    
                        <div className="contPreguntas" id="contPreguntas">
                        
                            <strong id="indicador_cont" className="indicador"></strong>
                            <p id="actual"></p>
                            <div id="pregunta2" className="pag">
                        <label for="">2.¿Equipo campeon de la compa del mundo en el año 2006?</label>
                        <br/><br/>
                        <label for="">A:</label> 
                         <label>Alemania</label>
                        <input type="radio" name="rst1"
                            value="Alemania" ref={this.pre1} onClick={this.enviarRespuesta} className={this.props.desabilitar}/>
                          
                            <br/>
                        <label for="">C:</label>
                        <label>Inglaterra</label>
                        <input type="radio" name="rst1"
                            value="Inglaterra" ref={this.pre2} onClick={this.enviarRespuesta2} className={this.props.desabilitar}/>
                           
                            <br/>
                        <label for="">B:</label>
                        <label id="rst1" className={this.props.colorgreen}>Italia</label>
                        <input type="radio" name="rst1" value="Italia" ref={this.pre3} onClick={this.enviarRespuesta3} className={this.props.desabilitar}/>
                       
                            <br/><br/>
                    </div>


                        </div>
                    </article>
               
            </div>
        )
    }

}
export default  Pregunta2;