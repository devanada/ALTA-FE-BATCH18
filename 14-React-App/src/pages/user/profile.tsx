import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import Layout from "@/components/layout";

import { useToken } from "@/utils/contexts/token";

const Profile = () => {
  const { user } = useToken();

  return (
    <Layout>
      {user ? (
        <div>
          <img
            className="rounded-full object-cover w-40 h-40"
            src={user.profile_picture}
            alt={user.full_name}
          />
          <p>{user.full_name}</p>
          <Button asChild>
            <Link to="/profile/edit">Edit Profile</Link>
          </Button>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </Layout>
  );
};

export default Profile;
