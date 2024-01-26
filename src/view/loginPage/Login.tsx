import { motion } from 'framer-motion';
import { Typography } from "@material-tailwind/react";
import logo from '../../assets/LoginImages/readsphere.png';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
// import { jwtDecode } from "jwt-decode";

function Login() {
  return (
    <>
      <div className='flex md:flex-row flex-col'>
        <motion.div
        initial={{
          x: -1000
        }}
        animate={{
          x: 0
        }}
        transition={{
          duration: 0.5,
          ease: "linear",
          delay: 0.1,
        }}
        className='bg-black md:h-screen md:min-h-[30rem] md:w-3/5 w-screen h-48'>
        <img
        src={logo}
        alt='Background image' 
        style={{ objectFit: 'cover', width: '100vw',height:'100%'}}
      ></img>
      <motion.div
        initial={{
          x: -1000
        }}
        animate={{
          x: 0
        }}
        transition={{
          duration: 1.5,
          ease: "linear",
          delay: 0.5,
        }}
         className="md:h-screen md:w-3/5 w-screen h-48 md:min-h-[30rem] absolute top-0 left-0 bg-[#d9dce4] mix-blend-overlay opacity-100"></motion.div>
        </motion.div>
        <div className='bg-[#e8e8e8] md:h-screen md:min-h-[30rem] md:w-1/5 w-screen h-14 absolute mix-blend-overlay opacity-40'></div>
        <div className='bg-black md:h-screen md:min-h-[30rem] md:w-3/5 w-screen h-48 absolute mix-blend-overlay opacity-10'></div>
        <motion.div
        initial={{
          y: -1000
        }}
        animate={{
          y: 0
        }}
        transition={{
          duration: 0.5,
          ease: "linear",
          delay: 0.1,
        }}
           className='bg-[#0771b8] md:h-screen md:min-h-[30rem] md:w-2/5 w-screen h-[31rem]'>
          <div className='flex items-center justify-center h-full'>
             <div className='w-4/5 h-4/5 flex flex-col items-center justify-center border border-white rounded'>
             <h1 className='-mt-5 text-black font-bold text-2xl '>Login</h1>
             <hr className='mt-2 h-1 w-2/5'></hr>
               <img alt='logo' src={logo} className='mt-8 w-3/5 h3/5'></img>
               
               <h3 className='mt-5 text-black'>Login With Your Google Account </h3>
               <div className='mt-3'></div>
               <GoogleOAuthProvider  clientId="439833973834-e1inhrr6q80nvv8kmtr0i3m9lpbh54nn.apps.googleusercontent.com">
      <GoogleLogin
        size='large'
        onSuccess={(credentialResponse) => {
          if (credentialResponse?.credential) {
            console.log(credentialResponse.credential);

            const cd = credentialResponse.credential;
            // console.log(jwtDecode(cd));

          } else {
            console.log('Credential not available');
          }
        }}
        onError={() => {
          console.log('Login Failed');
        }}
        useOneTap
      />
    </GoogleOAuthProvider>

             </div>
          </div>
        </motion.div>
      </div>

      {/* Other Content */}
      <div className='bg-white h-screen w-full'></div>

      {/* footer */}
      <footer className="w-full bg-[#4D6DE3] p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-[#4D6DE3] text-center md:justify-between">
        <img src="https://docs.material-tailwind.com/img/logo-ct-dark.png" alt="logo-ct" className="w-10" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              placeholder=''
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              placeholder=''
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              placeholder=''
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              placeholder=''
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography placeholder='' color="blue-gray" className="text-center font-normal">
        &copy; 2023 Material Tailwind
      </Typography>
    </footer>
    </>
  )
}

export default Login;
