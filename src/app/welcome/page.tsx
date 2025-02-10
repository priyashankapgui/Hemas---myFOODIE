import logo from '../../assets/images/myFoodie-logo.png';
import Image from 'next/image';


export default function Page() {
    const handleClick = () => {
        console.log('Button clicked!');
    }
    return(
        <>
         <h1 className="font-nunito text-7xl font-extralight text-theme_green-500">Hello, Next.js!</h1>
         <Image src={logo} alt="MyFoodie Logo"  className='w-36 h-auto pl-10'/>
       
        

         
         </>
        )
}