import React, {Component} from 'react';
import FormularioProd from './components/Formulario-prod'
import './App.css';


class App extends React.Component {

  doSomething = (companyinfo) => {
    console.log(companyinfo);
  }
	render() {
  	return (
    	<div>
        <FormularioProd onSubmit = {this.doSomething} />
    	</div>
    );
  }
}

export default App;
