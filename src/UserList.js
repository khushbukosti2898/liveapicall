import React from 'react';
import './style.scss'
import './App.css';
import axios from 'axios';

class UserList extends React.Component {
  constructor(props){
    super(props);
    this.state={
      users:[]
    }
  }
  componentDidMount(){
       axios.get('http://192.168.2.65:3030/posts')
      .then(response => {
        //console.log(response.data.data[0].id);
        this.setState({
          users:response.data.data
        })
        //console.log(this.state.users);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      });
}
  render(){
      return ( 
      <div className="userlist">
                  
                  <table>
                  <tr>
                    <th>ID</th>
                    <th>SurName</th>
                    <th>FirstName</th>
                  </tr>
                  { this.state.users.map(user => 
                  <tr>
                    <td>{user._id}</td>
                    <td>{user.body}</td>
                    <td>{user.title}</td>
                  </tr>
                  )}
                  </table>
                </div>
              
    )}
}

export default UserList;
