import { createContext, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
    const [selectedDay, setSelectedDay] = useState([]);
    const [createdHabits, setCreatedHabits ] = useState([]);
    const [id, setId] = useState();
    const [habitToday, setHabitToday] = useState([]);


  return (
    <UserContext.Provider value={{ selectedDay, setSelectedDay, createdHabits, setCreatedHabits, id, setId, habitToday, setHabitToday }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;

export { UserProvider };