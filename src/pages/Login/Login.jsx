// import React from 'react'
// import './Login.css'
// const Login = () => {
//   return (
//     <div className='login'>
      
//     </div>
//   )
// }

// export default Login

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login Details:", { email, password });
    // भविष्यात इथे आपण आपल्या बॅकएंड API ला रिक्वेस्ट पाठवू
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <form onSubmit={handleLogin} className="bg-black p-8 rounded-lg shadow-lg w-96 flex flex-col">
        <h1 className="text-3xl text-white font-bold mb-6">Sign In</h1>
        
        <input 
          type="email" 
          placeholder="Email Address" 
          className="p-3 mb-4 rounded bg-gray-800 text-white border-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <input 
          type="password" 
          placeholder="Password" 
          className="p-3 mb-6 rounded bg-gray-800 text-white border-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button type="submit" className="bg-red-600 text-white font-bold py-3 rounded">
          Login
        </button>
        
        <p className="text-gray-400 mt-4 text-sm">
          New to App? <Link to="/signup" className="text-white hover:underline">Sign up now.</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;

