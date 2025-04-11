// 'use client';

// import { useEffect, useState } from "react";
// import { fetchSwipeStats, fetchRevenueStats } from "@/services/api";
// import { Card, CardContent } from "@/components/ui/card";

// export default function DashboardPage() {
//   const [swipes, setSwipes] = useState(null);
//   const [revenue, setRevenue] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setSwipes(await fetchSwipeStats());
//       setRevenue(await fetchRevenueStats());
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <Card>
//           <CardContent>
//             <h2 className="text-xl font-semibold">Thống kê Swipes</h2>
//             <pre>{JSON.stringify(swipes, null, 2)}</pre>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardContent>
//             <h2 className="text-xl font-semibold">Doanh thu</h2>
//             <pre>{JSON.stringify(revenue, null, 2)}</pre>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }

"use client";

import { Card, CardContent } from "@/components/ui/card";
import { BarChart2, Heart, Plus, ShieldAlert, Users } from "lucide-react";

export default function AdminDashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>

      {/* Thống kê nhanh */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={<Users />} label="Total Users" value="12,345" />
        <StatCard icon={<Plus />} label="New Users" value="234" />
        <StatCard icon={<ShieldAlert />} label="Reports" value="56" />
        <StatCard icon={<Heart />} label="Matches" value="789" />
      </div>

      {/* Bảng dữ liệu người dùng và reports */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-2">User List</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b">
                  <th>Name</th>
                  <th>Age</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td>Anna Fi</td>
                  <td>23</td>
                  <td><i>Selaum, CO</i></td>
                </tr>
                <tr className="border-b">
                  <td>Any Ra</td>
                  <td>33</td>
                  <td><span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs">Active</span></td>
                </tr>
              </tbody>
            </table>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-2">Reports</h2>
            <ul className="text-sm space-y-2">
              <li className="flex justify-between">
                <span>Inappropriate content</span>
                <span>2021-07</span>
              </li>
              <li className="flex justify-between">
                <span>Harassment</span>
                <span className="font-bold">2021-07</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Biểu đồ Analytics (placeholder) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-2">Analytics</h2>
            <div className="h-32 bg-purple-100 rounded"></div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-2">Analytics</h2>
            <div className="h-32 bg-purple-100 rounded"></div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <Card className="flex items-center space-x-4 p-4">
      <div className="p-2 bg-purple-100 rounded-full text-purple-700">{icon}</div>
      <div>
        <div className="text-sm text-gray-500">{label}</div>
        <div className="text-xl font-bold">{value}</div>
      </div>
    </Card>
  );
}
