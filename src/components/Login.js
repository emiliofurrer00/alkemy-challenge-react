import React from 'react'
import axios from 'axios'
import swal from '@sweetalert/with-react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        const values = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        const emailRegexp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        console.log(values);

        //Validations
        //Either input is empty:
        if (!values.email || !values.password){
            swal({
                title: 'Oops!',
                text: 'All fields are required.',
                icon: 'error'
            })
            return;
        }
        //Invalid email format evaluated through RegExp
        if (!emailRegexp.test(values.email)){
            swal({
                title: 'Oops!',
                text: 'Email must have a valid format.',
                icon: 'error'
            })
            return;
        }
        //If credentials are incorrect
        if (values.email !== 'challenge@alkemy.org' || values.password !== 'react'){
            swal({
                title: 'Oops!',
                text: 'Invalid credentials.',
                icon: 'error'
            })
            return;
        }
        //No errors, proceed with request & login
        console.log('Ready to submit');
        axios.post('http://challenge-react.alkemy.org', {email: values.email, password: values.password})
            .then(response => {
                swal({
                    title: 'Welcome!',
                    text: 'Succesfully loged in',
                    icon: 'success'
                });
                console.log(response.data.token);
                localStorage.setItem('token', response.data.token);
                navigate('/');
            })
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