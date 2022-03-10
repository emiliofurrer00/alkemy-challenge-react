import React from 'react'
import axios from 'axios'

function Login() {

    function handleSubmit(e){
        e.preventDefault();
        const values = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        const emailRegexp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        console.log(values);

        //Validations
        if (!values.email || !values.password){
            console.log('All fields are required.');
            return;
        }
        
        if (!emailRegexp.test(values.email)){
            console.log('Invalid email value');
            return;
        }

        if (values.email !== 'challenge@alkemy.org' || values.password !== 'react'){
            console.log('Invalid credentials');
            return;
        }

        console.log('Ready to submit');
        axios.post('http://challenge-react.alkemy.org', {email: values.email, password: values.password})
            .then(console.log)
            .catch(console.error)
        ;
    }

    return (
        <form onSubmit={handleSubmit} >
            <label>
                <span>Email:</span><br/>
            <input type="email" name="email"></input>            
            </label>
            <br/>
            <label>
                <span>Password:</span><br/>            
                <input type="password" name="password"></input>
            </label>
            <br/>
            <input type="submit"></input>
        </form>
    )
}

export default Login