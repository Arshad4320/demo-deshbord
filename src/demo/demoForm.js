import React from 'react';
import { useForm, } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import { demoSchema } from './demoSchema';
import FormInput from './FormInput';
import { Link } from 'react-router-dom';

const DemoForm = () => {

  const { register, handleSubmit, formState: { errors }, setValue } = useForm({ resolver: yupResolver(demoSchema) });
  const onSubmit = async (data) => {
    try {}
    catch (err) {}

  }
  return (
    <div className="md:w-1/3 mx-auto border rounded-md py-3 px-4 mt-10 bg-pink-50 shadow-md">
      <h1 className='text-center my-10 font-semibold'>Sign up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput register={register} type='text' name='name' lebel='Your Name' placeholder='name' error={errors} />
        <FormInput register={register} type='text' name='address' lebel='Your Address' placeholder='address' error={errors} />
        <FormInput register={register} type='text' name='phoneNumber' lebel='Your Phone' placeholder='phone' error={errors} />
        <FormInput register={register} type='email' name='email' lebel='Your Email' placeholder='email' error={errors} />
        <FormInput register={register} type='password' name='password' lebel='Your password' placeholder='password' error={errors} />
        <h1 className='text-center'>Already Have an account please <Link href={'/signin'}><span className='text-primary'>sign in</span></Link> </h1>
        <button className='w-full bg-primary my-5 text-white py-1 rounded-md' type="submit">Signup</button>
      </form>

    </div>
  );
};

export default DemoForm;