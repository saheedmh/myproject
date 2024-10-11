import React, {useEffect, useState} from 'react'
import axios from 'axios';
const Form = () => {
    const [form, setForm] = useState([]);
    useEffect(()=>{
    axios.get("http://localhost:3030/post").then((res)=>{
   setForm(res.data)
   console.log(res.data);
    }).catch(err => console.log(err))

}, [])
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>id</th>
                <th>firstname:</th>
                <th>lastname</th>
                <th>email</th>
                <th>password</th>
                <th>confirmPassword</th>
            </tr>
        </thead>
        <tbody>
            {form.map((d, i) =>{
                return <tr key={i}>
                    <td>{d.id}</td>
                    <td>{d.first_name}</td>
                    <td>{d.last_name}</td>
                    <td>{d.email}</td>
                    <td>{d.password}</td>
                    <td>{d.confirm_password}</td>


                </tr>
            })}
        </tbody>

      </table>
    </div>
  )
}

export default Form
