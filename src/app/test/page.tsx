import React from 'react';
import userSchema from './Validations/page';
import * as yup from 'yup';

const Test = () => {

  const createUser = async () => {
    event.preventDefault();
    const formData = {
      name: event.target[0].value,
      email: event.target[0].evalue,
      password: event.target[0].value,
    };

    const isValid = await userSchema.isValid(formData);
    console.log(isValid);
    
  };

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={createUser}>
        <input type="text" placeholder="name" name="name" />
        <input type="email" placeholder="email" name="email" />
        <input type="password" placeholder="password" name="password" />
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default Test;
