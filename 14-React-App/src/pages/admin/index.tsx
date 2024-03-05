import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/components/layout";

import BookDashboard from "./books";
import BorrowDashboard from "./borrows";

const Dashboard = () => {
  return (
    <Layout>
      <Tabs defaultValue="books" className="w-full">
        <TabsList>
          <TabsTrigger value="books">Books</TabsTrigger>
          <TabsTrigger value="borrows">borrows</TabsTrigger>
        </TabsList>
        <TabsContent value="books">
          <BookDashboard />
        </TabsContent>
        <TabsContent value="borrows">
          <BorrowDashboard />
        </TabsContent>
      </Tabs>
    </Layout>
  );
};

export default Dashboard;
