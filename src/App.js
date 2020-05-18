import React from 'react';
import './App.css';
import HeaderContainer from './Components/Header/HeaderContainer';
import Navbar from './Components/Navbar/Navbar.jsx';
import Content from './Components/Content/Content';
import { connect } from 'react-redux';
import { inicializeApp } from './Redux/AppReducer';
import Preloader from './Components/Content/Common/Preloader/Preloader';




class App extends React.Component {
  
  componentDidMount() {

    this.props.inicializeApp();

  }


  render () {
    if (!this.props.inicialized) {
      return  <Preloader />
    }
    

  return (
    
  
      <div className='container'>
        <HeaderContainer />
        <Navbar myId={this.props.myId}/>
        <Content />
      </div>
 
  );
  }
}

let mapStateToProps=(state)=>{
  return{
  inicialized: state.app.inicialized,
  myId: state.authData.id
  }
}


export default connect(mapStateToProps, {inicializeApp})(App);


