import { FC, useEffect, useState } from "react";
import { List } from "./components/List";
import { IUser } from "./models";
import "./App.css";

const App: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${import.meta.env.VITE_BASE_USERS_URL}/users.json`);

      if (response.ok) {
        const data = await response.json(); 
        setUsers(data);
      } else {
        console.error("Failed to fetch user data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container">
      { loading
        ? <span>Loading...</span>
        : <List users={users} />
      }
    </div>
  )
}

export default App;
