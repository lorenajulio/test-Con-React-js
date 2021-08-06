import { Component } from 'react';


class PanelBnt  extends Component{

    enviardatoB1=()=>{
        this.props.obtenerrespuestaPanel(1);
    }
    enviardatoB2=()=>{
        this.props.obtenerrespuestaPanel(2);
    }
    enviardatoB3=()=>{
        this.props.obtenerrespuestaPanel(3);
    }
    enviardatoB4=()=>{
        this.props.obtenerrespuestaPanel(4);
    }
    enviardatoB5=()=>{
        this.props.obtenerrespuestaPanel(5);
    }
    enviardatoB6=()=>{
        this.props.obtenerrespuestaPanel(6);
    }
    enviardatoB7=()=>{
        this.props.obtenerrespuestaPanel(7);
    }
    enviardatoB8=()=>{
        this.props.obtenerrespuestaPanel(8);
    }
    enviardatoB9=()=>{
        this.props.obtenerrespuestaPanel(9);
    }

  render(){

    let clases =`${this.props.ocultarPanel}`;
    return(
        <div className={clases} >
     <div className="items">
        
        <button className="item"  onClick={this.enviardatoB1}>1</button>
        <button className="item" onClick={this.enviardatoB2}>2</button>
        <button className="item" onClick={this.enviardatoB3}>3</button>
        <button className="item" onClick={this.enviardatoB4}>4</button>
        <button className="item" onClick={this.enviardatoB5}>5</button>
        <button className="item" onClick={this.enviardatoB6}>6</button>
        <button className="item" onClick={this.enviardatoB7}>7</button>
        <button className="item" onClick={this.enviardatoB8}>8</button>
        <button className="item" onClick={this.enviardatoB9}>9</button>
    </div>
        </div>
        
    
      );
  }
  
}

export default PanelBnt;