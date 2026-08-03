// import React from 'react';

// const Login = () => {
//   return (
//     <div className='login-page'>
//       <h1>Login</h1>
//       {/* भविष्यात इथे लॉग इन फॉर्म येईल */}
//       <p>जुन्या युजर्ससाठी लॉग इन पेज.</p>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const API_URL = "http://localhost:8888/.netlify/functions/api/login";

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        alert("लॉगिन यशस्वी झाले!");
        
        // युजरची माहिती ब्राउझरमध्ये सेव्ह करणे (जेणेकरून पेज रिफ्रेश झाल्यावरही लॉगिन राहील)
        localStorage.setItem('user', JSON.stringify(data.user));
        
        navigate('/'); // यशस्वी लॉगिननंतर Home पेजवर पाठवणे
      } else {
        alert(data.message); // चुकीचा पासवर्ड किंवा युजर नसेल तर मेसेज दाखवणे
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("सर्व्हरशी संपर्क होऊ शकला नाही.");
    }
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
          required
        />
        
        <input 
          type="password" 
          placeholder="Password" 
          className="p-3 mb-6 rounded bg-gray-800 text-white border-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
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