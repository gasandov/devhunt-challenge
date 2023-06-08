import { useEffect, useState } from "react";

const Profile = ({ token }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch("http://localhost:80/api/profile", {
        headers: {
          Authorization: token,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data);
      }
    };

    fetchProfile();
  }, [token]);

  return (
    <div>
      <p>User name: {user.name}</p>
      <p>User email: {user.email}</p>
    </div>
  );
};

export default Profile;
