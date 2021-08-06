import React,{ Component } from 'react';
import Preguntas from './Preguntas';
import Pregunta2 from './Pregunta2';
import Pregunta3 from './Pregunta3';
import Pregunta4 from './Pregunta4';
import Pregunta5 from './Pregunta5';
import Pregunta6 from './Pregunta6';
import Pregunta7 from './Pregunta7';
import Pregunta8 from './Pregunta8';
import Pregunta9 from './Pregunta9';
import PanelBnt from './PanelBnt';

class Contenedor  extends Component{
    
    constructor(){
        super()
        this.state={
         ocultarPregunta:"d-md-none",
         mostrarPregunta:"d-md-block",
         contador:1,
         rescuesta1:"",
         rescuesta2:"",
         rescuesta3:"",
         rescuesta4:"",
         rescuesta5:"",
         rescuesta6:"",
         rescuesta7:"",
         rescuesta8:"",
         rescuesta9:""
        
        }
      }
 
     paginacionPreguntas =(e)=>{
        e.preventDefault();
        this.setState({
           contador: this.state.contador+1    
          })
        
     }

    
     anteriorPreguntas =(e)=>{
        e.preventDefault();
        this.setState({
           contador: this.state.contador-1    
          })
        
     }
  
     obtenerrespuestaPanel =(contador)=>{
        
        this.setState({
           contador   
          })
        
     }
    obtenerRespuesta1=(rescuesta1)=>{
        this.setState({
            rescuesta1   
           })
    }

    obtenerRespuesta2=(rescuesta2)=>{
        this.setState({
            rescuesta2   
           })
    }
  
    obtenerRespuesta3=(rescuesta3)=>{
        this.setState({
            rescuesta3   
           })
    }
    obtenerRespuesta4=(rescuesta4)=>{
        this.setState({
            rescuesta4   
           })
    }
    obtenerRespuesta5=(rescuesta5)=>{
        this.setState({
            rescuesta5   
           })
    }

    obtenerRespuesta6=(rescuesta6)=>{
        this.setState({
            rescuesta6   
           })
    }

    obtenerRespuesta7=(rescuesta7)=>{
        this.setState({
            rescuesta7   
           })
    }

    obtenerRespuesta8=(rescuesta8)=>{
        this.setState({
            rescuesta8   
           })
    }

    obtenerRespuesta9=(rescuesta9)=>{
        this.setState({
            rescuesta9   
           })
    }

  render(){
    let clase=`container ${this.props.ocultarPregunta}`;
    let pregunta1,pregunta2,pregunta3,pregunta4,pregunta5,pregunta6,pregunta7,pregunta8,pregunta9,
    claseocultarBack,claseNext,claseterminar,nota1,nota2,nota3,nota4,nota5,nota6,nota7,nota8,nota9,
    calificacion,ocultarReporteNota,estado,Panel,r1,r2,r3,r4,r5,r6,r7,r8,r9;
    console.log(this.state.contador)
    if(this.state.contador===1){
        pregunta1=<Preguntas obtenerRespuesta1={this.obtenerRespuesta1} mostrarPregunta={this.state.mostrarPregunta}/>;
        pregunta2=<Pregunta2 obtenerRespuesta2={this.obtenerRespuesta2} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta3=<Pregunta3 obtenerRespuesta3={this.obtenerRespuesta3} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta4=<Pregunta4 obtenerRespuesta4={this.obtenerRespuesta4} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta5=<Pregunta5 obtenerRespuesta5={this.obtenerRespuesta5} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta6=<Pregunta6 obtenerRespuesta6={this.obtenerRespuesta6} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta7=<Pregunta7 obtenerRespuesta7={this.obtenerRespuesta7} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta8=<Pregunta8 obtenerRespuesta8={this.obtenerRespuesta8} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta9=<Pregunta9 obtenerRespuesta9={this.obtenerRespuesta9} ocultarPregunta={this.state.ocultarPregunta}/>;
        Panel=<PanelBnt  obtenerrespuestaPanel={this.obtenerrespuestaPanel} ocultarPanel="d-md-block"/>;
        claseocultarBack=`back  d-md-none`;
        claseNext=`next d-md-block`;
        claseterminar=`terminar d-md-none`;
        ocultarReporteNota=`d-md-none`;
    }else if(this.state.contador===2){
        pregunta1=<Preguntas obtenerRespuesta1={this.obtenerRespuesta1} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta2=<Pregunta2 obtenerRespuesta2={this.obtenerRespuesta2} mostrarPregunta={this.state.mostrarPregunta}/>;
        pregunta3=<Pregunta3 obtenerRespuesta3={this.obtenerRespuesta3} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta4=<Pregunta4 obtenerRespuesta4={this.obtenerRespuesta4} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta5=<Pregunta5 obtenerRespuesta5={this.obtenerRespuesta5} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta6=<Pregunta6 obtenerRespuesta6={this.obtenerRespuesta6} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta7=<Pregunta7 obtenerRespuesta7={this.obtenerRespuesta7} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta8=<Pregunta8 obtenerRespuesta8={this.obtenerRespuesta8} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta9=<Pregunta9 obtenerRespuesta9={this.obtenerRespuesta9} ocultarPregunta={this.state.ocultarPregunta}/>;
        Panel=<PanelBnt  obtenerrespuestaPanel={this.obtenerrespuestaPanel} ocultarPanel="d-md-block"/>;
        claseocultarBack=`back  d-md-block`;
        claseNext=`next d-md-block`;
        claseterminar=`terminar d-md-none`;
        ocultarReporteNota=`d-md-none`;
    }else if(this.state.contador===3){
        pregunta1=<Preguntas obtenerRespuesta1={this.obtenerRespuesta1} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta2=<Pregunta2 obtenerRespuesta2={this.obtenerRespuesta2} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta3=<Pregunta3 obtenerRespuesta3={this.obtenerRespuesta3} mostrarPregunta={this.state.mostrarPregunta}/>;
        pregunta4=<Pregunta4 obtenerRespuesta4={this.obtenerRespuesta4} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta5=<Pregunta5 obtenerRespuesta5={this.obtenerRespuesta5} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta6=<Pregunta6 obtenerRespuesta6={this.obtenerRespuesta6} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta7=<Pregunta7 obtenerRespuesta7={this.obtenerRespuesta7} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta8=<Pregunta8 obtenerRespuesta8={this.obtenerRespuesta8} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta9=<Pregunta9 obtenerRespuesta9={this.obtenerRespuesta9} ocultarPregunta={this.state.ocultarPregunta}/>;
        Panel=<PanelBnt  obtenerrespuestaPanel={this.obtenerrespuestaPanel} ocultarPanel="d-md-block"/>;
        claseocultarBack=`back  d-md-block`;
        claseNext=`next d-md-block`;
        claseterminar=`terminar d-md-none`;
        ocultarReporteNota=`d-md-none`;
    }else if(this.state.contador===4){
        pregunta1=<Preguntas obtenerRespuesta1={this.obtenerRespuesta1} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta2=<Pregunta2 obtenerRespuesta2={this.obtenerRespuesta2} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta3=<Pregunta3 obtenerRespuesta3={this.obtenerRespuesta3} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta4=<Pregunta4 obtenerRespuesta4={this.obtenerRespuesta4} mostrarPregunta={this.state.mostrarPregunta}/>;
        pregunta5=<Pregunta5 obtenerRespuesta5={this.obtenerRespuesta5} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta6=<Pregunta6 obtenerRespuesta6={this.obtenerRespuesta6} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta7=<Pregunta7 obtenerRespuesta7={this.obtenerRespuesta7} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta8=<Pregunta8 obtenerRespuesta8={this.obtenerRespuesta8} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta9=<Pregunta9 obtenerRespuesta9={this.obtenerRespuesta9} ocultarPregunta={this.state.ocultarPregunta}/>;
        Panel=<PanelBnt  obtenerrespuestaPanel={this.obtenerrespuestaPanel} ocultarPanel="d-md-block"/>;
        claseocultarBack=`back  d-md-block`;
        claseNext=`next d-md-block`;
        claseterminar=`terminar d-md-none`;
        ocultarReporteNota=`d-md-none`;
    }else if(this.state.contador===5){
        pregunta1=<Preguntas obtenerRespuesta1={this.obtenerRespuesta1} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta2=<Pregunta2 obtenerRespuesta2={this.obtenerRespuesta2} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta3=<Pregunta3 obtenerRespuesta3={this.obtenerRespuesta3} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta4=<Pregunta4 obtenerRespuesta4={this.obtenerRespuesta4} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta5=<Pregunta5 obtenerRespuesta5={this.obtenerRespuesta5} mostrarPregunta={this.state.mostrarPregunta}/>;
        pregunta6=<Pregunta6 obtenerRespuesta6={this.obtenerRespuesta6} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta7=<Pregunta7 obtenerRespuesta7={this.obtenerRespuesta7} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta8=<Pregunta8 obtenerRespuesta8={this.obtenerRespuesta8} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta9=<Pregunta9 obtenerRespuesta9={this.obtenerRespuesta9} ocultarPregunta={this.state.ocultarPregunta}/>;
        Panel=<PanelBnt  obtenerrespuestaPanel={this.obtenerrespuestaPanel} ocultarPanel="d-md-block"/>;
        claseocultarBack=`back  d-md-block`;
        claseNext=`next d-md-block`;
        claseterminar=`terminar d-md-none`;
        ocultarReporteNota=`d-md-none`;
    }else if(this.state.contador===6){
        pregunta1=<Preguntas obtenerRespuesta1={this.obtenerRespuesta1} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta2=<Pregunta2 obtenerRespuesta2={this.obtenerRespuesta2} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta3=<Pregunta3 obtenerRespuesta3={this.obtenerRespuesta3} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta4=<Pregunta4 obtenerRespuesta4={this.obtenerRespuesta4} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta5=<Pregunta5 obtenerRespuesta5={this.obtenerRespuesta5} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta6=<Pregunta6 obtenerRespuesta6={this.obtenerRespuesta6} mostrarPregunta={this.state.mostrarPregunta}/>;
        pregunta7=<Pregunta7 obtenerRespuesta7={this.obtenerRespuesta7} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta8=<Pregunta8 obtenerRespuesta8={this.obtenerRespuesta8} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta9=<Pregunta9 obtenerRespuesta9={this.obtenerRespuesta9} ocultarPregunta={this.state.ocultarPregunta}/>;
        Panel=<PanelBnt  obtenerrespuestaPanel={this.obtenerrespuestaPanel} ocultarPanel="d-md-block"/>;
        claseocultarBack=`back  d-md-block`;
        claseNext=`next d-md-block`;
        claseterminar=`terminar d-md-none`
        ocultarReporteNota=`d-md-none`;
    }else if(this.state.contador===7){
        pregunta1=<Preguntas obtenerRespuesta1={this.obtenerRespuesta1} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta2=<Pregunta2 obtenerRespuesta2={this.obtenerRespuesta2} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta3=<Pregunta3 obtenerRespuesta3={this.obtenerRespuesta3} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta4=<Pregunta4 obtenerRespuesta4={this.obtenerRespuesta4} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta5=<Pregunta5 obtenerRespuesta5={this.obtenerRespuesta5} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta6=<Pregunta6 obtenerRespuesta6={this.obtenerRespuesta6} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta7=<Pregunta7 obtenerRespuesta7={this.obtenerRespuesta7} mostrarPregunta={this.state.mostrarPregunta}/>;
        pregunta8=<Pregunta8 obtenerRespuesta8={this.obtenerRespuesta8} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta9=<Pregunta9 obtenerRespuesta9={this.obtenerRespuesta9} ocultarPregunta={this.state.ocultarPregunta}/>;
        Panel=<PanelBnt  obtenerrespuestaPanel={this.obtenerrespuestaPanel} ocultarPanel="d-md-block"/>;
        claseocultarBack=`back  d-md-block`;
        claseNext=`next d-md-block`;
        claseterminar=`terminar d-md-none`
        ocultarReporteNota=`d-md-none`;
    }else if(this.state.contador===8){
        pregunta1=<Preguntas obtenerRespuesta1={this.obtenerRespuesta1} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta2=<Pregunta2 obtenerRespuesta2={this.obtenerRespuesta2} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta3=<Pregunta3 obtenerRespuesta3={this.obtenerRespuesta3} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta4=<Pregunta4 obtenerRespuesta4={this.obtenerRespuesta4} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta5=<Pregunta5 obtenerRespuesta5={this.obtenerRespuesta5} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta6=<Pregunta6 obtenerRespuesta6={this.obtenerRespuesta6} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta7=<Pregunta7 obtenerRespuesta7={this.obtenerRespuesta7} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta8=<Pregunta8 obtenerRespuesta8={this.obtenerRespuesta8} mostrarPregunta={this.state.mostrarPregunta}/>;
        pregunta9=<Pregunta9 obtenerRespuesta9={this.obtenerRespuesta9} ocultarPregunta={this.state.ocultarPregunta}/>;
        Panel=<PanelBnt  obtenerrespuestaPanel={this.obtenerrespuestaPanel} ocultarPanel="d-md-block"/>;
        claseocultarBack=`back  d-md-block`;
        claseNext=`next d-md-block`;
        claseterminar=`terminar d-md-none`;
        ocultarReporteNota=`d-md-none`;
    }else if(this.state.contador===9){
        pregunta1=<Preguntas obtenerRespuesta1={this.obtenerRespuesta1} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta2=<Pregunta2 obtenerRespuesta2={this.obtenerRespuesta2} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta3=<Pregunta3 obtenerRespuesta3={this.obtenerRespuesta3} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta4=<Pregunta4 obtenerRespuesta4={this.obtenerRespuesta4} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta5=<Pregunta5 obtenerRespuesta5={this.obtenerRespuesta5} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta6=<Pregunta6 obtenerRespuesta6={this.obtenerRespuesta6} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta7=<Pregunta7 obtenerRespuesta7={this.obtenerRespuesta7} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta8=<Pregunta8 obtenerRespuesta8={this.obtenerRespuesta8} ocultarPregunta={this.state.ocultarPregunta}/>;
        pregunta9=<Pregunta9 obtenerRespuesta9={this.obtenerRespuesta9} mostrarPregunta={this.state.mostrarPregunta}/>;
        Panel=<PanelBnt  obtenerrespuestaPanel={this.obtenerrespuestaPanel} ocultarPanel="d-md-block"/>;
        claseocultarBack=`back  d-md-block`;
        claseNext=`next d-md-none`;
        claseterminar=`terminar d-md-block`;
        ocultarReporteNota=`d-md-none`;
    }else if(this.state.contador===10){
        pregunta1=<Preguntas obtenerRespuesta1={this.obtenerRespuesta1} mostrarPregunta={this.state.mostrarPregunta} colorgreen="colorgreen" desabilitar="desabilitar"/>;
        pregunta2=<Pregunta2 obtenerRespuesta2={this.obtenerRespuesta2} mostrarPregunta={this.state.mostrarPregunta} colorgreen="colorgreen" desabilitar="desabilitar"/>;
        pregunta3=<Pregunta3 obtenerRespuesta3={this.obtenerRespuesta3} mostrarPregunta={this.state.mostrarPregunta} colorgreen="colorgreen" desabilitar="desabilitar"/>;
        pregunta4=<Pregunta4 obtenerRespuesta4={this.obtenerRespuesta4} mostrarPregunta={this.state.mostrarPregunta} colorgreen="colorgreen" desabilitar="desabilitar"/>;
        pregunta5=<Pregunta5 obtenerRespuesta5={this.obtenerRespuesta5} mostrarPregunta={this.state.mostrarPregunta} colorgreen="colorgreen" desabilitar="desabilitar"/>;
        pregunta6=<Pregunta6 obtenerRespuesta6={this.obtenerRespuesta6} mostrarPregunta={this.state.mostrarPregunta} colorgreen="colorgreen" desabilitar="desabilitar"/>;
        pregunta7=<Pregunta7 obtenerRespuesta7={this.obtenerRespuesta7} mostrarPregunta={this.state.mostrarPregunta} colorgreen="colorgreen" desabilitar="desabilitar"/>;
        pregunta8=<Pregunta8 obtenerRespuesta8={this.obtenerRespuesta8} mostrarPregunta={this.state.mostrarPregunta} colorgreen="colorgreen" desabilitar="desabilitar"/>;
        pregunta9=<Pregunta9 obtenerRespuesta9={this.obtenerRespuesta9} mostrarPregunta={this.state.mostrarPregunta} colorgreen="colorgreen" desabilitar="desabilitar"/>;
        claseocultarBack=`back  d-md-none`;
        claseNext=`next d-md-none`;
        claseterminar=`terminar d-md-none`;
        ocultarReporteNota=`d-md-block`;
        Panel=<PanelBnt  obtenerrespuestaPanel={this.obtenerrespuestaPanel} ocultarPanel="d-md-none"/>;

    }

    if(this.state.rescuesta1==="Leonel messi"){
        nota1=0.5;
    }else{
        nota1=0;
    }

    if(this.state.rescuesta2==="Italia"){
        nota2=0.5;
    }else{
        nota2=0;
    }
    if(this.state.rescuesta3==="Jurgen Klopp"){
        nota3=0.5;
    }else{
        nota3=0;
    }
     
    if(this.state.rescuesta4==="Real madrid"){
        nota4=0.5;
    }else{
        nota4=0;
    }
    if(this.state.rescuesta5==="Neymar Jr"){
        nota5=0.5;
    }else{
        nota5=0;
    }
    if(this.state.rescuesta6==="10"){
        nota6=0.5;
    }else{
        nota6=0;
    }
    if(this.state.rescuesta7==="Pelé"){
        nota7=0.5;
    }else{
        nota7=0;
    }
    if(this.state.rescuesta8==="Uruguay"){
        nota8=0.5;
    }else{
        nota8=0;
    }
    if(this.state.rescuesta9==="Miroslav Klose"){
        nota9=1;
    }else{
        nota9=0;
    }
    calificacion=(nota1+nota2+nota3+nota4+nota5+nota6+nota7+nota8+nota9);
    if(calificacion>=3){
        estado="Aprobo";
    }else{
        estado="Reprobo";
    }

    if(this.state.rescuesta1===""){
       r1=0;
    }else{
        r1=1
    }

    if(this.state.rescuesta2===""){
        r2=0;
     }else{
         r2=1
     }
     if(this.state.rescuesta3===""){
        r3=0;
     }else{
         r3=1
     }
     if(this.state.rescuesta4===""){
        r4=0;
     }else{
         r4=1
     }

     if(this.state.rescuesta5===""){
        r5=0;
     }else{
         r5=1
     }

     if(this.state.rescuesta6===""){
        r6=0;
     }else{
         r6=1
     }
     if(this.state.rescuesta7===""){
        r7=0;
     }else{
         r7=1
     }

     if(this.state.rescuesta8===""){
        r8=0;
     }else{
         r8=1
     }
     if(this.state.rescuesta9===""){
        r9=0;
     }else{
         r9=1
     }
     let TotalRealizadas=r1+r2+r3+r4+r5+r6+r7+r8+r9;
   console.log(r1+r2+r3+r4)
    return(
        <React.Fragment>
            <div className={clase}>
            <section className="main row col-md-12">
                <div className={ocultarReporteNota}>
                <h1 className="estado">{estado}</h1><br/>
                <div className="nota">Su Nota es: {calificacion} / 5</div> 
                </div>
           
              {pregunta1}
              {pregunta2}
              {pregunta3}
              {pregunta4}
              {pregunta5}
              {pregunta6}
              {pregunta7}
              {pregunta8}
              {pregunta9}
              
             <div className="controles">
                    <button className={claseocultarBack} id="back"  onClick={this.anteriorPreguntas}>Back</button>
                    <button className={claseNext} id="next" onClick={this.paginacionPreguntas}>Next</button>
                    <button className={claseterminar} id="Terminartest" onClick={this.paginacionPreguntas}>Enviar Test</button>
   
             </div>
             <p className="pRealizadas">Preguntas Realizadas {TotalRealizadas} de 9</p>
            {Panel}
            </section>
         
            </div>
       
        </React.Fragment>
      );
  }
  
}

export default Contenedor;