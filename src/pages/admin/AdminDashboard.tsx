
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Users, Package, LineChart, Activity } from 'lucide-react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const AdminDashboard = () => {
  const recentActivities = [
    { item: "New team member added", person: "John Doe", time: "5 min ago" },
    { item: "Insight published", person: "Jane Smith", time: "1 hour ago" },
    { item: "Service updated", person: "Admin", time: "3 hours ago" },
    { item: "New team member added", person: "Peter Jones", time: "1 day ago" },
  ];

  const data = [
    { name: "Jan", total: Math.floor(Math.random() * 20) + 5 },
    { name: "Feb", total: Math.floor(Math.random() * 20) + 5 },
    { name: "Mar", total: Math.floor(Math.random() * 20) + 5 },
    { name: "Apr", total: Math.floor(Math.random() * 20) + 5 },
    { name: "May", total: Math.floor(Math.random() * 20) + 5 },
    { name: "Jun", total: Math.floor(Math.random() * 20) + 5 },
    { name: "Jul", total: Math.floor(Math.random() * 20) + 5 },
    { name: "Aug", total: Math.floor(Math.random() * 20) + 5 },
    { name: "Sep", total: Math.floor(Math.random() * 20) + 5 },
    { name: "Oct", total: Math.floor(Math.random() * 20) + 5 },
    { name: "Nov", total: Math.floor(Math.random() * 20) + 5 },
    { name: "Dec", total: Math.floor(Math.random() * 20) + 5 },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Team Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Services</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">+1 this quarter</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Insights</CardTitle>
            <LineChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">+5 from last month</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Insights Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={data}>
                <XAxis
                  dataKey="name"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}`}
                />
                <Bar dataKey="total" fill="#18181b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Recent changes and additions to your site.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center">
                  <Activity className="h-4 w-4 text-muted-foreground mr-4" />
                  <div className="flex-1">
                    <p className="text-sm font-medium leading-none">{activity.item}</p>
                    <p className="text-sm text-muted-foreground">by {activity.person}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{activity.time}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
