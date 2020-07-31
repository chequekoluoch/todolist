import React,{useContext, useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState'
import { v4 as uuid } from 'uuid'
const AddUser = () => {
const [name, setName]=useState('')
    const { addUser } =useContext(GlobalContext)
    const history=useHistory()
const handleSubmit=e=>{
e.preventDefault()
history.push('/')
const newUser={
    id:uuid(),
    name
}
addUser(newUser)
}

const handleChange=e=>{
   setName(e.target.value) 
}
    return (
       
        <Form onSubmit={handleSubmit}>
          <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control value={name}
              onChange={handleChange}
              type="text" placeholder="Enter Name"/>
          </Form.Group>  
              <Button type="submit">Submit</Button>
              <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
      
    )
}

export default AddUser
