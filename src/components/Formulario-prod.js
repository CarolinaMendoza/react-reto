import React, {Component}from 'react';
import axios from 'axios';
import './Formulario-prod.css';

class FormularioProd extends React.Component {
    state = { name: '',
              price: '',
              nutrient: '',
              image: '',};
      
    handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await axios.post(
          `https://benefits-user-dot-yuyaytest.uc.r.appspot.com/v2/post/product`,
          {
              name: this.state.name,
              price: this.state.price,
              nutrient: this.state.nutrient,
              image: this.state.image

          }
        );
        this.props.onSubmit(resp.data);
        this.setState({ name: '', price: '', nutrient: '', image: ''});
        console.log({'Message': this.state.name+ this.state.price+ this.state.nutrient+this.state.image });
    };
  
    render() {
      return (
        <form className="row" onSubmit={this.handleSubmit}>
          <span className="formtext">Crear Producto</span>
          <div className="col-md-3">
            <input 
              type="text" 
              value={this.state.name}
              onChange={event => this.setState({ name: event.target.value })}
              placeholder="Ingresar Nombre" 
              required 
            />
          </div>
          <div className="col-md-3">
            <input
                    type="number"
                    value={this.state.price}
                    onChange={event => this.setState({ price: event.target.value })}
                    placeholder="Ingrese Precio"
                    required
                />
           </div>
           <div className="col-md-3">
            <input
                    type="text"
                    value={this.state.nutrient}
                    onChange={event => this.setState({ nutrient: event.target.value })}
                    placeholder="Ingrese Nutriente"
                    required
                />
           </div>
           <div className="col-md-3">
                <input className="image" type="file" name="image" onChange={event => this.setState({ image: event.target.value })}/>
            </div>
            
            <button className="btn btn-primary" type="submit">Crear</button> 
          </form>
          

          
        );
      }
    }

export default FormularioProd;