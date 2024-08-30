import React, { useState } from 'react';

const Button = ({ children, className, ...props }) => (
  <button 
    className={`px-4 py-2 rounded-md transition duration-300 ${className}`} 
    {...props}
  >
    {children}
  </button>
);

const Input = ({ className, ...props }) => (
  <input 
    className={`w-full px-4 py-2 rounded-md transition duration-300 ${className}`} 
    {...props}
  />
);

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="relative min-h-screen w-full bg-cover bg-center flex items-center justify-center" 
         style={{backgroundImage: `url('/src/assets/images/test2.png')`}}>
      {/* Semi-transparent black overlay */}
      <div className="absolute inset-0 bg-black opacity-15"></div>
      
      {/* Login form container */}
      <div className="relative z-10 w-full max-w-md bg-black bg-opacity-50 rounded-lg p-8 backdrop-blur-sm">
        <h1 className="text-3xl font-bold text-white mb-6">Log in</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <Input
              id="email"
              type="email"
              placeholder="Enter Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-black bg-opacity-50 text-white placeholder-gray-400 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white hover:bg-opacity-75"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">Password</label>
            <Input
              id="password"
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-black bg-opacity-50 text-white placeholder-gray-400 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white hover:bg-opacity-75"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-white text-black py-2 rounded-md hover:bg-opacity-90 active:bg-opacity-100 transform hover:scale-105 transition-all duration-300"
          >
            Sign In
          </Button>
        </form>
        
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-600"></div>
          <span className="px-3 text-gray-400 text-sm">or</span>
          <div className="flex-grow border-t border-gray-600"></div>
        </div>
        
        <Button
          className="w-full bg-black bg-opacity-50 text-white border border-white py-2 rounded-md hover:bg-opacity-75 active:bg-opacity-100 flex items-center justify-center transform hover:scale-105 transition-all duration-300"
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
            />
          </svg>
          Log in with Google
        </Button>
        
        <p className="mt-6 text-center text-gray-300">
          Don't have an account? 
          <a href="#" className="text-white hover:underline ml-1 transition duration-300">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;