import React from 'react';
import ReactDOM from 'react-dom';
import './static/index.css';
import App from './App';

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

class Doc extends React.Component{
  componentDidMount(){
    document.title = "Ultropia Ultrasonics"
  }

  render(){
    return(
      <App />
    )
  }
}


ReactDOM.render(
  <React.StrictMode>
    <Doc/>
  </React.StrictMode>,
  document.getElementById('root')
);


