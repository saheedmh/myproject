
import axios from 'axios';
import React, { Component } from 'react'

export default class RegisterComponent extends Component {
    handleSubmit =(e) => {
        e.preventDefault();
        const data = {
            first_name :this.firstName,
            last_name :this.lastname,
            email:this.email,
            password:this.password,
            passwrd_confirm:this.confirmpassword
            }
            console.log(data)
            axios.post('https://localhost:3400/register', data).then(
                res =>{
                    console.log(res)
                }
            ).catch(
                err=>{
                    console.log(err)
                }
            )
        
       }
  render(){
    return (
      <div>
         <h1>welcome to HackYourFuture institute</h1>
<form  onSubmit={this.handleSubmit} className="signup-form bg-white">
     
  
    <h3>sign up</h3>

    
    <div className='form-group'>
      <label htmlFor="">First Name</label>
      <input type="text" className='form control' placeholder='First Name' onChange={e => this.firstName = e.target.value} />
    </div>
<br /><br />
    <div className='form-group'>
      <label htmlFor="">Last Name</label>
      <input type="text" className='form control' placeholder='Last Name'  onChange={e => this.lastname = e.target.value}/>
    </div>
<br /><br />
    <div className='form-group'>
      <label htmlFor="">Email</label>
      <input type="text" className='form control' placeholder='Email' onChange={e => this.email =e.target.value}/>
    </div>
    <br /><br />

    <div className='form-group'>
      <label htmlFor="">Password</label>
      <input type="text" className='form control' placeholder='Password' onChange={e => this.password = e.target.value} />
    </div>
    <br /><br />


    <div className='form-group'>
      <label htmlFor="">confirmPassword</label>
      <input type="text" className='form control' placeholder='confirmPassword' onChange={e => this.confirmpassword = e.target.value} />
    </div>
    <br /><br />

    

    <button className='btn btn-primary'>submit</button>
    <p >Already registered {" "} login in?</p>

    
  </form>



  
      </div>
       
    )
  }
}
