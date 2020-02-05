import React from 'react';
import './style.scss'
import './App.css';
import axios from 'axios';


class UserDetail extends React.Component {
  constructor(props){
    super(props);
    this.state={
      users:[]
    }
    
  }
  

  componentDidUpdate(prevProps, prevState){
    const {id}=this.props.data;
    if(prevProps.data.id !== id){
        axios.get(`http://192.168.2.65:3030/posts/${id}`)
      .then(response => {
        this.setState({
          users:response.data
        })
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      });
    }    
    
}


  render(){
      return (<div className="userdetail">
                        USER Details<br/><br/><br/><br/><br/>
                        <table className="table">
                        <thead className="thead-light">
                          <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Surname</th>
                            <th scope="col">Name</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{this.state.users._id}</td>
                            <td>{this.state.users.body}</td>
                            <td>{this.state.users.title}</td>
                          </tr>
                        </tbody>
                      </table>
                </div>
            )}
}

export default UserDetail;
