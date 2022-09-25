import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import styled from "styled-components";
import { login } from '../actions';

const userSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required()
});

const Login = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(userSchema)
  });

  const dispatch = useDispatch();
  const history = useNavigate();

  const handleForm = (data) => {
    dispatch(login(data, () => {
      history.push('/');
    }));
    console.log('handleForm');
  };

  return (
    // <Login>
    <form onSubmit={handleSubmit(handleForm)}>
      <div className='form-group'>
        <label>
          Email
        </label>
        <input 
        className='form-control'
        name='email' ref={register({ required: true })}></input>
        {/* {errors.email?.message} */}
      </div>
      <div className='form-group'>
        <label>Password</label>
        <input 
        className='form-control'
        name='password' ref={register({ required: true })}></input>
        {/* {errors.password?.message} */}
      </div>
    </form>
    // </Login>
  )
};

export default Login;