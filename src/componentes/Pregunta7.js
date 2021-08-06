import React, { Component } from 'react';

class Pregunta7 extends Component{
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
        this.props.obtenerRespuesta7(respuesta1)
    }
    enviarRespuesta2=()=>{
        let respuesta1=this.pre2.current.value;
        this.props.obtenerRespuesta7(respuesta1)
    }
    enviarRespuesta3=()=>{
        let respuesta1=this.pre3.current.value;
        this.props.obtenerRespuesta7(respuesta1)
    }
    render(){
        let clase=`container ${this.props.ocultarPregunta} ${this.props.mostrarPregunta}`;
        return(
    
            <div className= {clase} >
                <h3 className="indicador">Pregunta 7 de 9</h3>
                   
                    <article className="col-md-12">
                    
                        <div className="contPreguntas" id="contPreguntas">
                        
                            <strong id="indicador_cont" className="indicador"></strong>
                            <p id="actual"></p>
                            <div id="pregunta7" class="pag">
                        
                    </div>
                    <label for="">7.¿Quién es conocido como el rey del fútbol?</label><br/><br/>
                        <label for="">A:</label>
                        <label>Ronaldo Nazario</label>
                        <input type="radio" name="rst6"
                            value="Ronaldo Nazario" ref={this.pre1} onClick={this.enviarRespuesta} className={this.props.desabilitar}/><br/>
                        <label for="">B:</label>
                        <label id="rst6" className={this.props.colorgreen}>Pelé</label>
                        <input type="radio" name="rst6" value="Pelé" ref={this.pre2} onClick={this.enviarRespuesta2} className={this.props.desabilitar}/>
                        <br/>
                        <label for="">C:</label>
                        <label>Ronaldiño</label>
                        <input type="radio" name="rst6"
                            value="Ronaldiño" ref={this.pre3} onClick={this.enviarRespuesta3} className={this.props.desabilitar}/><br/><br/>  
                        

                        </div>
                    </article>
       
            </div>
        )
    }

}
export default  Pregunta7;