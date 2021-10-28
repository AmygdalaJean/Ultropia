import React from 'react';
import ReactDOM from 'react-dom';
import './static/index.css';
import App from './App';

import DocumentMeta from 'react-document-meta';

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />


class Example extends React.Component {
  render() {
    const meta = {
      title: 'TinkerSpot',
      description: "Get involved with TinkerSpot! Sign up for our newsletter and vote on where we should open our first workshop!",
      canonical: 'https://tinker-spot.com/',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'react,meta,document,html,tags'
        }
      }
    };
 
    return (
      <DocumentMeta {...meta}>
        <App/>
      </DocumentMeta>
    );
  }
}
 
ReactDOM.render(<Example />, document.getElementById('root'));