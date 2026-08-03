// import React from 'react';

// const SignUp = () => {
//   return (
//     <div className='signup-page'>
//       <h1>Sign Up</h1>
//       {/* भविष्यात इथे रजिस्ट्रेशन फॉर्म येईल */}
//       <p>नवीन युजर अकाउंट तयार करण्याचे पेज.</p>
//     </div>
//   );
// }

// export default SignUp;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // दुसऱ्या पेजवर जाण्यासाठी

  // तुमच्या बॅकएंडची लिंक (लोकल टेस्टिंगसाठी Netlify CLI पोर्ट सहसा 8888 असतो)
  // जेव्हा तुम्ही बॅकएंड Netlify वर डेप्लॉय कराल, तेव्हा इथे ती लाईव्ह लिंक टाकावी लागेल.
  const API_URL = "http://localhost:8888/.netlify/functions/api/signup"; 

  const handleSignUp = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // आपण JSON डेटा पाठवत आहोत हे सांगण्यासाठी
        },
        body: JSON.stringify({ email, password }) // डेटा JSON मध्ये रूपांतरित करणे
      });

      const data = await response.json();

      if (response.ok) {
        alert("अकाउंट यशस्वीरीत्या तयार झाले!");
        navigate('/login'); // अकाउंट बनवल्यावर Login पेजवर पाठवणे
      } else {
        alert(data.message); // जर युजर आधीच असेल तर एरर मेसेज दाखवणे
      }
    } catch (error) {
      console.error("SignUp Error:", error);
      alert("सर्व्हरशी संपर्क होऊ शकला नाही.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <form onSubmit={handleSignUp} className="bg-black p-8 rounded-lg shadow-lg w-96 flex flex-col">
        <h1 className="text-3xl text-white font-bold mb-6">Sign Up</h1>
        
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
          Create Account
        </button>
        
        <p className="text-gray-400 mt-4 text-sm">
          Already have an account? <Link to="/login" className="text-white hover:underline">Sign In.</Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;