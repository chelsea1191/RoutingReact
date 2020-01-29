import React, { useState, useEffect } from "react"
import qs from "qs"
import Nav from "./components/Nav"
import Home from "./components/Home"
import Users from "./components/Users"
import axios from 'axios'
import { getHash } from "./utils/utils"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const API = "https://acme-users-api-rev.herokuapp.com/api"
let pageNumber = 1


function App() {
  const [params, setParams] = useState(qs.parse(getHash()))
  const [allUsers, setAllUsers] = useState({})
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get(`${API}/users`).then(response => {
      setAllUsers({...response.data})
    })
  }, [])

  useEffect(() => {
    window.addEventListener("hashchange", () => {
      setParams(qs.parse(getHash()));
    })
    setParams(qs.parse(getHash()));
  }, [])

  useEffect(() => {
    axios.get(`${API}/users/${pageNumber}`).then(response => {
      setUsers([...response.data.users])
    })
  }, [])

  return (
    <div className="App">
      <Nav />
      {params.view === undefined && <Home />}
      {params.view === "users" && <Users pageNumber={pageNumber} users={users} allUsers={allUsers}/>}
    </div>
  )
}

export default App
