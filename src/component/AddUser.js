import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';


function AddUser({users, setUsers}) {
  let [name,setName]= useState("")
  let [email,setEmail]= useState("")
  let [mobile,setMobile]= useState("")
  let [dob,setDob]= useState("")
  
  let navigate = useNavigate()
  let params = useParams()

  let handleSubmit = ()=>{
    let newUser={name,email,mobile,dob}
    let newArray = [...users]
    if(params.id !== undefined){
      newArray.splice(params.id,1,newUser)
    }
    else{newArray.push(newUser)}
    setUsers(newArray)
    navigate('/dashboard')
  }
//different ways for useing use Effect
  // useEffect(()=>{
  //   console.log("use effect triger")
  // }) //triggered when a state stage
  // useEffect(()=>{
  //   console.log("use effect triger")
  // },[]) //triggered onlu for a first time whenthe component is loadding
  // useEffect(()=>{
  //   console.log("use effect triger")
  // },[name,email]) //trigered when a mentioned state changes

  useEffect(()=>{
    if(params.id !== undefined)
    {
      setName(users[params.id].name)
      setEmail(users[params.id].email)
      setMobile(users[params.id].mobile)
      setDob(users[params.id].dob)
    }
    console.log("use trigered effect")
  },[params.id,users]) //dependency array add for removing warning 


  return (
    <div className='container-fluid'>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" placeholder="Enter your mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>DOB</Form.Label>
        <Form.Control type="date" placeholder="Enter your dob" value={dob} onChange={(e)=>setDob(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" onClick={(e)=>handleSubmit()}>
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default AddUser