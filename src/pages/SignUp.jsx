
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault(); 
    
    try {
      // 💡 लक्ष द्या: इंटरनेटवर टाकण्यापूर्वी इथे तुमचा लाईव्ह बॅकएंड URL टाका.
      // (उदा. 'https://tumcha-backend.netlify.app/.netlify/functions/api/signup')
      const response = await fetch('http://localhost:8888/.netlify/functions/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        alert("Account created successfully! 🎉 Please Sign In.");
        
        navigate('/'); 
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      console.error("Signup failed:", error);
      alert("Network Error! Please check your backend connection.");
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-bold mb-6 text-center text-red-600">Sign Up</h1>
        
        <form onSubmit={handleSignUp} className="flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="Full Name" 
            className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button 
            type="submit" 
            className="bg-red-600 hover:bg-red-700 p-3 rounded font-bold transition duration-300">
            Sign Up
          </button>
        </form>
        
        <p className="mt-4 text-gray-400 text-center">
          Already have an account? <Link to="/" className="text-white hover:underline">Sign in.</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;