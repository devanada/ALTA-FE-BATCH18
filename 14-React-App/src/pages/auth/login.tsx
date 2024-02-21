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

const Login = () => {
  return (
    <Layout centerY centerX>
      <Card className="w-full md:w-1/2">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Login to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <Input placeholder="john_doe@mail.com" type="email" />
            <Input placeholder="Password" type="password" />
            <Button type="submit">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default Login;
