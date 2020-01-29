import React from "react"
import Spinner from 'react-bootstrap/Spinner'
import Pages from './Pages'


export default function Users({pageNumber, users, allUsers}) {
  return (

    <div>
      <Pages allUsers={allUsers} pageNumber={pageNumber} />
    <div>
    <h2>Users ({allUsers.count} in total)</h2>
    </div>
    <div className="list">
    <ul>
      {
        users && users ? (
          users.map( user =>
          <li key={user.id}>{user.fullName}</li>
          )
        ) : (
          <Spinner animation="border" />
        )
      }
    </ul>
    </div>
    </div>
    )
  }

