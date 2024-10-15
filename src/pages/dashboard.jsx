import { BarLoader } from "react-spinners";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-8">
      {true && <BarLoader wwidth={"100%"} color="#36d7b7" />}
      <div className="grid grid-cols-2 gap-4"> 

      <Card>
        <CardHeader>
          <CardTitle>Link Created</CardTitle>
        </CardHeader>
        <CardContent>
          <p>0</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Total click</CardTitle>
        </CardHeader>
        <CardContent>
          <p>0</p>
        </CardContent>
      </Card>
    </div>
    </div>
  );
};

export default Dashboard;
