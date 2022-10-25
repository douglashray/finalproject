import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import styled from "styled-components";
import { signup } from '../actions';
import Axios from 'axios';

const userSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required()
});

const Signup = (props) => {
  // console.log('signup');
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(userSchema)
  });
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();
  const history = useNavigate();

  const handleForm = (data) => {
    console.log('handleForm' + data + JSON.stringify(data));
    dispatch(signup(data, () => {
      history.push('/');
    }));
    
  };

  return (
    <Form>
      <form onSubmit={handleSubmit(handleForm)}>
        <div className='form-group'>
          <label>
            Email
          </label>
          <input 
          className='form-control'
          name='email' {...register('email', { required: true })} onChange={(e) => {setEmail(e.target.value);
          }} />
                    {/* {errors.email?.message} */}
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input 
          className='form-control'
          name='password' {...register('password', { required: true })} onChange={(e) => {setPassword(e.target.value);
          }} />
          {/* {errors.password?.message} */}
        </div>
        <button className='btn btn-secondary' type='Submit'>Sign Up</button>
      </form>
    </Form>
  )
};

export default Signup; 

const Form = styled.div`
display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2em;
  margin: 0 auto;
  padding-top: 100px;

`;