import React, { useState } from 'react';
import SubmitBtn from '@/components/custom-ui/SubmitBtn';
import CustomInputField from '@/components/custom-ui/CustomInputField';
import { CustomTextarea } from '@/components/custom-ui/CustomTextarea';

export const FeedbackFormSection = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handle Input change for name
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  // Handle Input change for email
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  // Handle Input change for message
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      message,
    };
    console.log("Form Data: ", formData);
  };

  return (
    <>
      <form className='flex flex-col w-full items-start bg-theme_green-75 rounded-lg shadow-xl p-4 md:p-6 space-y-4 md:space-y-7' onSubmit={onSubmit}>

        <div className='w-full'>
          <p className='font-semibold'>Name</p>
          <CustomInputField
            value={name}
            type="text"
            placeholder="Enter your Name"
            ariaLabel="Name"
            onChange={handleNameChange}
            className='bg-white border-gray-200 focus-visible:ring-1 w-full'
          />
        </div>

        <div className='w-full'>
          <p className='font-semibold'>Email</p>
          <CustomInputField
            value={email}
            type="text"
            placeholder="Enter your email"
            ariaLabel="email"
            onChange={handleEmailChange}
            className='bg-white border-gray-200 focus-visible:ring-1 w-full'
          />
        </div>

        <div className='w-full'>
          <p className='font-semibold'>Message</p>
          <CustomTextarea
            value={message}
            placeholder="Enter your message"
            ariaLabel="message"
            className='h-32 bg-white border-gray-200 focus-visible:ring-1 w-full'
            onChange={handleMessageChange}
          />
        </div>

        <SubmitBtn label="Submit" className='w-full h-11 font-nunito font-regular' type="submit" />
      </form>
    </>
  )
}