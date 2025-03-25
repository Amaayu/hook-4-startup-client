import React, { createContext, useContext, useState } from "react";

// ✅ Create Context
const UserContext = createContext();

// ✅ Create Provider Component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // ✅ Update User Data
  const updateUser = (newUser) => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

// ✅ Custom Hook to Use Context
export const useUser = () => {
  return useContext(UserContext);
};
