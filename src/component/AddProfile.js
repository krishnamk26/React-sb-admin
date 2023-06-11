import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function AddProfile({user, setUsers}){
 // const [validated, setValidated] = useState(false);

//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }
//     setValidated(true);
//   };
  let [name,setName]= useState("")
  let [uname,setUsername]= useState("")
  let [city,setCity]= useState("")
  let [state,setState]= useState("")
  let [zip,setZip]= useState("")

  let navigate = useNavigate()
  let params = useParams()

  let handleSubmit = ()=>{
    let newUse={name,uname,city,state,zip}
    let newArray = [...user]
    if(params.id !== undefined){
      newArray.splice(params.id,1,newUse)
    }
    else{newArray.push(newUse)}
    setUsers(newArray)
    navigate('/profile')
  }
  useEffect(()=>{
    if(params.id !== undefined)
    {
      setName(user[params.id].name)
      setUsername(user[params.id].uname)
      setCity(user[params.id].city)
      setState(user[params.id].state)
      setZip(user[params.id].zip)
    }
    console.log("use trigered effect")
  },[params.id,user]) 
  

  return (
    <div className='container-fluid'>
      <Form >
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          {/* <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group> */}
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Username" value={uname} onChange={(e)=>setUsername(e.target.value)}
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" value={city} onChange={(e)=>setCity(e.target.value)} required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" value={state} onChange={(e)=>setState(e.target.value)} required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" value={zip} onChange={(e)=>setZip(e.target.value)} required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button variant='primary' onClick={(e)=>handleSubmit()}>Submit</Button>
      </Form>
    </div>

  );
}

export default AddProfile;