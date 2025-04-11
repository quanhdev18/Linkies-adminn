// File: app/admin/reports/page.tsx
'use client';

import { useEffect, useState } from "react";
import { fetchReports, banUser, updateReport } from "@/services/api";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ReportsPage() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchReports();
      setReports(data);
    };
    fetchData();
  }, []);

  const handleBanUser = async (userId: number) => {
    await banUser(userId);
    alert(`Đã ban người dùng ${userId}`);
  };

  const handleResolveReport = async (reportId: number) => {
    await updateReport(reportId, "resolved");
    alert(`Đã xử lý report ${reportId}`);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Báo cáo người dùng</h1>
      <div className="space-y-4">
        {reports.map((report: any) => (
          <Card key={report.id}>
            <CardContent className="space-y-2">
              <p><strong>Người báo cáo:</strong> {report.reporter_id}</p>
              <p><strong>Người bị báo cáo:</strong> {report.reported_id}</p>
              <p><strong>Lý do:</strong> {report.reason}</p>
              <div className="flex gap-3">
                <Button variant="destructive" onClick={() => handleBanUser(report.reported_id)}>
                  Ban người dùng
                </Button>
                <Button onClick={() => handleResolveReport(report.id)}>
                  Đánh dấu đã xử lý
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
