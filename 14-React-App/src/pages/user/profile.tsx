import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import Layout from "@/components/layout";

import { getProfile } from "@/utils/apis/user/api";
import { IProfile } from "@/utils/apis/user/type";

const Profile = () => {
  const [data, setData] = useState<IProfile>();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getProfile();

      setData(result.payload);
    } catch (error) {
      toast((error as Error).message);
    }
  }

  return (
    <Layout>
      {data ? (
        <div>
          <img
            className="rounded-full object-cover w-40 h-40"
            src={data.profile_picture}
            alt={data.full_name}
          />
          <p>{data.full_name}</p>
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
