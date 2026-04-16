import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  // Check valid session on load
  useEffect(() => {
    const storedUser = localStorage.getItem('yinyang_user');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email, password) => {
    // In a real app, this calls an API
    // Here we'll simulate it by checking localStorage for existing user,
    // or just mocking a successful login if it's test@test.com
    let users = [];
    try {
      users = JSON.parse(localStorage.getItem('yinyang_users_db')) || [];
    } catch(e) {}

    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
      const userData = { email: user.email, name: user.name };
      setCurrentUser(userData);
      localStorage.setItem('yinyang_user', JSON.stringify(userData));
      return { success: true };
    } else if (email === 'test@test.com' && password === 'password') {
      // Dummy account for testing
      const userData = { email, name: 'Test User' };
      setCurrentUser(userData);
      localStorage.setItem('yinyang_user', JSON.stringify(userData));
      return { success: true };
    }
    
    return { success: false, message: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง (Invalid email or password)' };
  };

  const register = (name, email, password) => {
    let users = [];
    try {
      users = JSON.parse(localStorage.getItem('yinyang_users_db')) || [];
    } catch(e) {}

    if (users.find(u => u.email === email)) {
      return { success: false, message: 'อีเมลนี้ถูกใช้งานแล้ว (Email already exists)' };
    }

    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem('yinyang_users_db', JSON.stringify(users));
    
    // Auto login
    const userData = { email, name };
    setCurrentUser(userData);
    localStorage.setItem('yinyang_user', JSON.stringify(userData));
    return { success: true };
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('yinyang_user');
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
