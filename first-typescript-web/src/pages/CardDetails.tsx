import { Card } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const CardDetails = () => {
  const [users, setUsers] = useState([]); 
  useEffect(() => {
    fetchData();
  }, []);

  const apiUrl = "http://localhost/task1/backend/api.php?action=";

  const fetchData = async () => {
    try {
      const response = await axios.get(`${apiUrl}fetch`);
      const data = response.data;

      let usersArray = [];
      if (Array.isArray(data)) {
        usersArray = data;
      } else if (data) {
        usersArray = [data];
      }

      setUsers(usersArray);
      console.log("Data fetched successfully:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {users.length > 0 ? (
        users.map((user, index) => (
          <Card
            key={index}
            className="w-96 h-48 flex flex-col items-center justify-center shadow-lg rounded-lg p-4 mb-4"
          >
            <h2 className="text-xl font-bold">Card Title</h2>
            <p className="text-gray-600">Name: {user.username || user.name || "No name"}</p>
          </Card>
        ))
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default CardDetails;
