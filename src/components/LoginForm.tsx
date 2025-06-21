'use client';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const { email, password } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: '' }));
  };

  const validateError = () => {
    let isValid = true;
    const errors = {
      email: '',
      password: '',
    };

    if (!email.trim()) {
      errors.email = 'Please enter a valid email';
      isValid = false;
    }

    if (!password.trim()) {
      errors.password = 'Please enter a valid password';
      isValid = false;
    }

    setError(errors);
    return isValid;
  };

  const handleBlur = (field: 'email' | 'password') => {
    const value = formData[field].trim();
    const updatedErrors = { ...error };

    if (!value) {
      updatedErrors[field] = `Please enter a valid ${field}`;
    } else {
      updatedErrors[field] = '';
    }

    setError(updatedErrors);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateError()) {
      navigate('/dashboard');
      localStorage.setItem('user', email);

      setFormData({ email: '', password: '' });
      setError({ email: '', password: '' });
    }
  };

  return (
    <div className="mx-auto p-8 bg-gray-100 rounded shadow max-w-md mt-40">
      <h2 className="text-center text-xl mb-4 font-semibold">DevBox Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border p-2 mb-4 rounded"
            name="email"
            value={email}
            onChange={handleChange}
            onBlur={() => handleBlur('email')}
          />
          {error.email && <p className="text-red-500 mb-2">{error.email}</p>}
        </div>
        <div>
          <input
            type="password"
            placeholder="********"
            className="w-full border p-2 mb-4 rounded"
            name="password"
            value={password}
            onChange={handleChange}
            onBlur={() => handleBlur('password')}
          />
          {error.password && (
            <p className="text-red-500 mb-2">{error.password}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full text-white bg-gray-600 p-2 rounded hover:bg-gray-500 cursor-pointer"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
