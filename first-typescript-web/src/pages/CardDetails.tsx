import { Card, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const CardDetails = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState("All");

  const apiUrl = "http://localhost/task1/backend/api.php?action=";

  useEffect(() => {
    fetchData();
  }, []);

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

  const handleUserChange = (event) => {
    setSelectedUser(event.target.value);
  };

  const filteredUsers =
    selectedUser === "All"
      ? users
      : users.filter(
          (user) => user.username === selectedUser || user.name === selectedUser
        );

    type User = {
    username?: string;
    name?: string;
  };

  return (
    <div className="p-2">
      {/* Dropdown */}
      <FormControl className="w-1/4" style={{ marginBottom: "1rem" }}>
        <InputLabel id="user-select-label">Select User</InputLabel>
        <Select
          labelId="user-select-label"
          value={selectedUser}
          label="Select User"
          onChange={handleUserChange}
          className="p-2"
        >
          <MenuItem value="All">All</MenuItem>
          {users.map((user, index) => {
            const displayName = user.username || user.name || `User ${index + 1}`;
            return (
              <MenuItem key={index} value={user.username || user.name}>
                {displayName}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user, index) => (
            <Card
              key={index}
              className="w-96 h-48 flex flex-col items-center justify-center shadow-lg rounded-lg p-4 mb-4"
            >
              <h2 className="text-xl font-bold">Card Title</h2>
              <p className="text-gray-600">
                Name: {user.username || user.name || "No name"}
              </p>
            </Card>
          ))
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </div>
  );
};

export default CardDetails;