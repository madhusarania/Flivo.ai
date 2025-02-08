import React from "react";
import { Line } from "react-chartjs-2";
import {
  Card,
  CardContent,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/card";

const UsagePage = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Creations",
        data: [0, 1, 1.5, 2, 1.8, 1.2, 2],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.4,
      },
      {
        label: "Deploys",
        data: [0, 0.5, 1, 1.5, 1, 1.2, 1.8],
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        tension: 0.4,
      },
      {
        label: "Executions",
        data: [0, 0.3, 0.7, 1, 1.2, 0.8, 1.5],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Usage</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent>
            <h2 className="text-lg font-semibold">0</h2>
            <p className="text-gray-500">Active Crews</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h2 className="text-lg font-semibold">0</h2>
            <p className="text-gray-500">Executions</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h2 className="text-lg font-semibold">0</h2>
            <p className="text-gray-500">Deploys</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h2 className="text-lg font-semibold">1</h2>
            <p className="text-gray-500">Users</p>
          </CardContent>
        </Card>
      </div>
      <Tabs defaultValue="insights">
        <TabsList className="mb-4">
          <TabsTrigger value="insights">Insights</TabsTrigger>
          <TabsTrigger value="limits">Limits</TabsTrigger>
        </TabsList>
        <TabsContent value="insights">
          <div className="flex items-center gap-4 mb-4">
            <select className="p-2 border rounded-md">
              <option>Weekly</option>
              <option>Monthly</option>
              <option>Yearly</option>
            </select>
            <select className="p-2 border rounded-md">
              <option>Current Month</option>
              <option>Previous Month</option>
            </select>
            <select className="p-2 border rounded-md">
              <option>Cumulative</option>
              <option>Daily</option>
            </select>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-2">Overview</h2>
            <p className="text-gray-500 mb-4">
              Crews created, Deploys, and Crew executions
            </p>
            <Line data={data} options={options} />
          </div>
        </TabsContent>
        <TabsContent value="limits">
          <p className="text-gray-600">Limits content will go here.</p>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UsagePage;
