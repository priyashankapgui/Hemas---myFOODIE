'use client';
import React, { useState } from 'react';
import SubmitBtn from '@/components/custom-ui/SubmitBtn';
import Image from 'next/image';
import CustomInputField from '@/components/custom-ui/CustomInputField';

const LoginFormSection = () => {
    // State for input fields
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Handle Submit function
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();  // Prevent page reload
        const formData = {
            username,
            password,
        };
        console.log("Form Data: ", formData);

    };

    // Handle Input change for username
    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    // Handle Input change for password
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    return (
        <>
            <form className="flex flex-col w-full items-start  " onSubmit={onSubmit}>
                <div>
                    <Image
                        src="/Logo.png"
                        alt="MyFoodie Logo"
                        width={200}
                        height={200}
                    />
                </div>
                <div className="items-start w-full space-y-4">
                    <h2 className="text-3xl font-semibold text-black">Get Started</h2>
                    <p className="text-xl font-extralight text-black italic ">Welcome to myFOODIE - Let’s taste your meal</p>
                    <div className="w-full h-0.5 bg-gray-950 my-6" />
                </div>
               
                <div className="flex flex-col w-full space-y-7 mt-5">

               
                    <CustomInputField
                        value={username}
                        type="text"
                        placeholder="Enter your username"
                        ariaLabel="Username"
                        onChange={handleUsernameChange}
                    />

                    <CustomInputField
                        value={password}
                        isPassword={true}
                        type="password"
                        placeholder="Enter your password"
                        ariaLabel="Password"
                        onChange={handlePasswordChange}
                    />
                    
                    <SubmitBtn label="Sign in" className='w-full h-11 font-nunito font-regular' type="submit" />
                </div>
            </form>
        </>
    );
};

export default LoginFormSection;
