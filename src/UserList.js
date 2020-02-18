import React from 'react';
import './style.scss'
import './App.css';
import axios from 'axios';
import AddUser from './AddUser'
import EditUser from './EditUser'
import DeleteUser from './DeleteUser'
import { Table } from 'react-bootstrap'
import Title from './title';


class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      id: ''
    }
  }
  componentDidMount() {
    axios.get('http://192.168.2.65:3030/posts')
      .then((response) => response)
      .then(response =>
        this.setState({
          users: response.data.data
        })
      )
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }
  
  render() {
    return (
      <div>
        <div className="heading">
          <Title/>
        </div>

        <div className="userlist">
          <Table striped bordered hover size="sm" responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>SurName</th>
                <th>FirstName</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map(user =>
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.title}</td>
                  <td>{user.body}</td>
                  <td><EditUser id={user._id} title={user.title} body={user.body}/>
                    <DeleteUser id={user._id} />
                  </td>
                </tr>
              )}
            </tbody>

          </Table>
          <AddUser />
        </div>
      </div>
    )
  }
}

export default UserList;
