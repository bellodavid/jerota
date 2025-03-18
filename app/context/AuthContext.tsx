import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { MMKV } from 'react-native-mmkv';

// Initialize MMKV storage
const storage = new MMKV({
  id: 'auth-storage',
  encryptionKey: 'jerota-auth-key', // For secure storage
});

// Define user type
type User = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  // Add more user properties as needed
};

// Define context state type
type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  updateUserProfile: (userData: Partial<User>) => Promise<void>;
};

// Create the context with a default value
const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: async () => {},
  register: async () => {},
  logout: async () => {},
  updateUserProfile: async () => {},
});

// Auth provider props type
type AuthProviderProps = {
  children: ReactNode;
};

// Create the auth provider component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Load user data from storage on app start
  useEffect(() => {
    const loadUser = () => {
      try {
        const userData = storage.getString('user');
        const token = storage.getString('token');

        if (userData && token) {
          setUser(JSON.parse(userData));
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Failed to load user data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, []);

  // Login function
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Make API call to your backend for authentication
      // This is a placeholder for your actual authentication API call
      // const response = await fetch('your-auth-api-endpoint', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, password }),
      // });

      // const data = await response.json();

      // Simulate successful login for demo
      const demoUser: User = {
        id: '1',
        name: 'Demo User',
        email: email,
      };

      // Store user data and token
      storage.set('user', JSON.stringify(demoUser));
      storage.set('token', 'demo-token-value');

      setUser(demoUser);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Login failed:', error);
      throw new Error('Login failed. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  // Register function
  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    try {
      // Make API call to your backend for registration
      // This is a placeholder for your actual registration API call
      // const response = await fetch('your-register-api-endpoint', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ name, email, password }),
      // });

      // const data = await response.json();

      // Simulate successful registration for demo
      const newUser: User = {
        id: '1',
        name: name,
        email: email,
      };

      // Store user data and token
      storage.set('user', JSON.stringify(newUser));
      storage.set('token', 'demo-token-value');

      setUser(newUser);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Registration failed:', error);
      throw new Error('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = async () => {
    try {
      // Clear stored data
      storage.delete('user');
      storage.delete('token');

      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  // Update user profile
  const updateUserProfile = async (userData: Partial<User>) => {
    try {
      if (!user) {
        throw new Error('No user is logged in');
      }

      // Make API call to update profile
      // const response = await fetch('your-update-profile-api-endpoint', {
      //   method: 'PUT',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': `Bearer ${storage.getString('token')}`,
      //   },
      //   body: JSON.stringify(userData),
      // });

      // Update local user data
      const updatedUser = { ...user, ...userData };
      storage.set('user', JSON.stringify(updatedUser));
      setUser(updatedUser);
    } catch (error) {
      console.error('Profile update failed:', error);
      throw new Error('Failed to update profile. Please try again.');
    }
  };

  // Context value
  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    register,
    logout,
    updateUserProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
