import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout";

import {
  deleteProfile,
  getProfile,
  updateProfile,
} from "@/utils/apis/user/api";
import { IProfile } from "@/utils/apis/user/type";

const EditProfile = () => {
  const navigate = useNavigate();

  const [data, setData] = useState<IProfile>();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const { payload } = await getProfile();

      setData(payload);
      setFullName(payload.full_name);
      setEmail(payload.email);
      setAddress(payload.address);
      setPhoneNumber(payload.phone_number);
    } catch (error) {
      toast((error as Error).message);
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const body = {
      email,
      full_name: fullName,
      password,
      phone_number: phoneNumber,
      address,
    };

    try {
      const result = await updateProfile(body);

      toast(result.message);
      navigate("/profile");
    } catch (error) {
      toast((error as Error).message);
    }
  }

  async function handleDelete() {
    try {
      const result = await deleteProfile();

      toast(result.message);
      localStorage.removeItem("token");
      navigate("/login");
    } catch (error) {
      toast((error as Error).message);
    }
  }

  return (
    <Layout>
      {data ? (
        <form className="space-y-4" onSubmit={onSubmit}>
          <Input
            placeholder="Full Name"
            name="full_name"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <Input
            placeholder="john_doe@mail.com"
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            placeholder="Address"
            name="address"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Input
            placeholder="Phone Number"
            type="tel"
            name="phone_number"
            required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <Input
            placeholder="Profile Picture"
            type="file"
            name="profile_picture"
          />
          <Button type="submit">Submit</Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button>Delete Account</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => handleDelete()}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </form>
      ) : (
        <p>Loading</p>
      )}
    </Layout>
  );
};

export default EditProfile;
