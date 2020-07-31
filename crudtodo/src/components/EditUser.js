import React,{ useState, useContext, useEffect} from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState'
//import { v4 as uuid } from 'uuid'

const EditUser = (props) => {
const [selectedUser, setSelectedUser]=useState({
    id:'',
    name:''
})
const { users, editUser } =useContext(GlobalContext)
const history=useHistory()
const currentUserId=props.match.params.id

useEffect(()=>{
  const userId=currentUserId;
  const selectedUser=users.find(user=>user.id===Number(userId))
  setSelectedUser(selectedUser)
},[currentUserId, users])

const handleSubmit=e=>{
         //e.preventDefault()
         history.push('/')
         editUser(selectedUser)          
}

const handleChange=e=>{
    setSelectedUser({...selectedUser, [e.target.name]: e.target.value}) 
}
    return (
      <Form onSubmit={handleSubmit}>
      <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
          name="name"
          //value={selectedUser.name} 
          onChange={handleChange}
          type="text" placeholder="Enter Name"/>
      </Form.Group>  
          <Button type="submit">Edit Name</Button>
          <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
    )
}

export default EditUser

