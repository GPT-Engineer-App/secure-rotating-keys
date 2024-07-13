import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAccessLogs } from "@/lib/keyManagement";

export const AccessLogs = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      const accessLogs = await getAccessLogs();
      setLogs(accessLogs);
    };
    fetchLogs();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Access Logs</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {logs.map((log, index) => (
            <li key={index} className="text-sm">
              <span className="font-semibold">{log.timestamp}</span> -{" "}
              {log.user}: {log.action}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};