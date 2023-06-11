import React from 'react'
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function Profile({ user, setUsers }) {
  let navigate = useNavigate()
  return (
    <div>
      <div className='container-fluid'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Username</th>
              <th>City</th>
              <th>State</th>
              <th>Zip</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {
              user.map((e, i) => {
                return <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{e.name}</td>
                  <td>{e.uname}</td>
                  <td>{e.city}</td>
                  <td>{e.state}</td>
                  <td>{e.zip}</td>
                  <td>
                    <Button variant="primary" onClick={() => navigate(`/edit-profile/${i}`)}>Edit</Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button variant="danger" onClick={() => {
                      let newArray = [...user]
                      newArray.splice(i, 1)
                      setUsers(newArray)
                    }
                    }>Delete</Button>
                  </td>
                </tr>
              })
            }
          </tbody>
        </Table>
      </div>
    </div>
  )

}

export default Profile
