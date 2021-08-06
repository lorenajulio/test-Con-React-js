import React, { Component } from 'react';

class Pregunta5 extends Component{
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
        this.props.obtenerRespuesta5(respuesta1)
    }
    enviarRespuesta2=()=>{
        let respuesta1=this.pre2.current.value;
        this.props.obtenerRespuesta5(respuesta1)
    }
    enviarRespuesta3=()=>{
        let respuesta1=this.pre3.current.value;
        this.props.obtenerRespuesta5(respuesta1)
    }
  
    render(){
        let clase=`container ${this.props.ocultarPregunta} ${this.props.mostrarPregunta}`;
        return(
    
            <div className= {clase}>
               <h3 className="indicador">Pregunta 5 de 9</h3>
                   
                    <article className="col-md-12">
                    
                        <div className="contPreguntas" id="contPreguntas">
                        
                            <strong id="indicador_cont" className="indicador"></strong>
                            <p id="actual"></p>
                            <div id="pregunta5" class="pag">
                        <label for="">5.¿jugador con el fichaje mas caro?</label>
                        <br/><br/>
                        <label for="">A:</label>
                        <label id="rst4" className={this.props.colorgreen}>Neymar Jr</label>
                        <input type="radio" name="rst4" value="Neymar Jr"  ref={this.pre1} onClick={this.enviarRespuesta} className={this.props.desabilitar}/>
                        <br/>
                        <label for="">B:</label>
                        <label>Kylian Mbappé</label>
                        <input type="radio" name="rst4" value="Kylian Mbappé"  ref={this.pre2} onClick={this.enviarRespuesta2} className={this.props.desabilitar}/>
                        <br/>
                        <label for="">C:</label>
                        <label>Philippe Coutinho</label>
                        <input type="radio" name="rst4" value="Philippe Coutinho"  ref={this.pre3} onClick={this.enviarRespuesta3} className={this.props.desabilitar}/>
                           
                            <br/><br/>
                    </div>
                            
                        

                        </div>
                    </article>
            
            </div>
        )
    }

}
export default  Pregunta5;