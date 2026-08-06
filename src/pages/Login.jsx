import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault(); 
    
    try {
      // (तुमची API लिंक - जर तुम्ही इंटरनेटवर टाकणार असाल तर इथे लाईव्ह लिंक द्या)
      const response = await fetch('http://localhost:8888/.netlify/functions/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        localStorage.setItem('token', data.token);
        alert("Login successful! 🎉 Welcome to Netflix Clone.");
        
        // 💡 ब्रह्मास्त्र: थेट JavaScript द्वारे पेज बदलणे
        //window.location.href = '/movies'; 
        window.location.href = '/home';
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Network Error! Is the backend server running?");
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-bold mb-6 text-center text-red-600">Sign In</h1>
        
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
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
            Sign In
          </button>
        </form>
        
        <p className="mt-4 text-gray-400 text-center">
          New to Netflix? <Link to="/signup" className="text-white hover:underline">Sign up now.</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;