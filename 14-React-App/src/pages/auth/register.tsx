import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout";

const Register = () => {
  return (
    <Layout centerY centerX>
      <Card className="w-full md:w-1/2">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Register your account now!</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <Input placeholder="John Doe" />
            <Input placeholder="john_doe@mail.com" type="email" />
            <Input placeholder="Password" type="password" />
            <Input placeholder="Address" />
            <Input placeholder="628xxxxxxxxxx" type="tel" />
            <Button type="submit">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default Register;
