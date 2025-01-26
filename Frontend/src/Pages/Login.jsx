import React, { useState } from 'react';


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add logic to handle form submission here (e.g., sending data to a server)
    console.log(formData);
  };

  return (
    <section className="login-section">
      <div className="container4">
        <div className="login-form">
          <h2 className="login-title">Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="form-input"
            />
            <button type="submit" className="form-button">Login</button>
          </form>
          <p className="form-footer">
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
