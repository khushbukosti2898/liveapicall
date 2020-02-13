import React from 'react';
import './style.scss'
import './App.css';
import axios from 'axios';
import AddUser from './AddUser'
import EditUser from './EditUser'
import DeleteUser from './DeleteUser'


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
    .then((response) =>response)
    .then(response=>
        this.setState({
        users:response.data.data
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
  /*   handleClick = (userid,e) => {
      console.log(e.target.name);
      this.setState({
        id: userid
      })
    } */
  render() {
    return (

      <div className="userlist">
        <AddUser />
        <table>
          <tbody>
            <tr>
            <th>ID</th>
            <th>SurName</th>
            <th>FirstName</th>
            <th>Action</th>
          </tr>
          {this.state.users.map(user =>
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.body}</td>
              <td>{user.title}</td>
              <td><EditUser id={user._id}/>
                  <DeleteUser id={user._id}/>
              </td>
            </tr>
          )}
          </tbody>
 s
        </table>
      </div>

    )
  }
}

export default UserList;
