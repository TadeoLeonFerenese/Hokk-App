import { useState } from "react";
import { UserContext } from "./userContext";

// const user = {
//   id: 123,
//   name: "Tadeo",
//   email: "Teoleon2013@gmail.com",
// };

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  return (
    // <UserContext.Provider value={{ hola: "Mundo", user: user }}>
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
