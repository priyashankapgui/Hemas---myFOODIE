"use client";
import SubmitBtn from '@/components/custom-ui/SubmitBtn';
import Image from 'next/image';

const LoginFormSection = () => {

    // Handle Submit function 
    const handleSubmit = () => {
        console.log('Sign in');
    }

    return (
        <>
            <form className="flex flex-col items-start w-2/6 space-y-4">
                <div>
                    <Image
                        src="/Logo.png"
                        alt="MyFoodie Logo"
                        width={200}
                        height={200}
                    />
                </div>
                <div className=" items-start w-full space-y-2 ">
                    <h2 className="text-3xl font-semibold  text-black">Get Started</h2>
                    <p className="text-xl font-extralight text-black italic">Welcome to myFOODIE - Let&rsquo;s taste your meal</p>
                    {/* &rsquo; → Right single quote (’) */}
                   
                </div>

                <div className="flex flex-col w-full space-y-4 ">
                <div className="w-full h-0.5 bg-gray-950 my-6" />
                    <SubmitBtn label="Sign in" className='w-full h-11' onClick={handleSubmit} />
                </div>

            </form>

        </>
    )
}

export default LoginFormSection
