import React from 'react';
import './App.css';
import './style.scss'
import Title from './title.js'
import UserList from './UserList.js'
import UserDetail from './userdetail';

class App extends React.Component {
  state={
    id:0
  }
  updateId = userid =>{
    this.setState({
      id:userid
    })
  }
  render(){
    return (
    <div className="App">
      <div className="main">
      <Title />
      <div className="content">
      <UserList updateId={this.updateId}/>
      <UserDetail  data={this.state}/>
      </div>
      </div>
    </div>
  );
}
}
export default App;
