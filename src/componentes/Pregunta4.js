import React, { Component } from 'react';

class Pregunta4 extends Component{
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
        this.props.obtenerRespuesta4(respuesta1)
    }
    enviarRespuesta2=()=>{
        let respuesta1=this.pre2.current.value;
        this.props.obtenerRespuesta4(respuesta1)
    }
    enviarRespuesta3=()=>{
        let respuesta1=this.pre3.current.value;
        this.props.obtenerRespuesta4(respuesta1)
    }
  
    render(){
        let clase=`container ${this.props.ocultarPregunta} ${this.props.mostrarPregunta}`;
        return(
    
            <div className= {clase} >
            <h3 className="indicador">Pregunta 4 de 9</h3>
                   
                    <article className="col-md-12">
                    
                        <div className="contPreguntas" id="contPreguntas">
                        
                            <strong id="indicador_cont" className="indicador"></strong>
                            <p id="actual"></p>
                            <div id="pregunta4" className="pag">
                            
                        <label for="">4.¿Equipo campeon de la UEFA CHAMPIONS LEAGUE en el año 2016?
                        </label>
                        <br/><br/>
                        <label for="">A:</label>
                        <label>FcBarcelona</label>
                        <input type="radio" name="rst3" value="Fc Barcelona" ref={this.pre1} onClick={this.enviarRespuesta} className={this.props.desabilitar}/>
                            <br/>
                        <label for="">B:</label>
                        <label>Bayern Munich</label>
                        <input type="radio" name="rst3"
                            value="Bayern Munich" ref={this.pre2} onClick={this.enviarRespuesta2} className={this.props.desabilitar}/><br/>
                        <label for="">C:</label>
                        <label
                            id="rst3" className={this.props.colorgreen}>Real madrid</label>
                        <input type="radio" name="rst3" value="Real madrid" ref={this.pre3} onClick={this.enviarRespuesta3} className={this.props.desabilitar}/>
                            <br/><br/>
                    </div>


                        </div>
                    </article>
                
            </div>
        )
    }

}
export default  Pregunta4;