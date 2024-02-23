import { useEffect, useState } from "react";

import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { getProfile } from "@/utils/apis/user/api";
import { setAxiosConfig } from "@/utils/apis/axiosWithConfig";
import { IProfile } from "@/utils/apis/user/type";

const Profile = () => {
  const [data, setData] = useState<IProfile>();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setAxiosConfig(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJlbWFpbCI6ImRldmFuYWRhQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwODY5MjQ0NCwiZXhwIjoxNzA4Njk5NjQ0fQ.XIYKjtZQYVrWcxcVUz0ieufI85tUkCNxY0o8PnTGdiI"
    );

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
          <Button>Edit Profile</Button>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </Layout>
  );
};

export default Profile;
