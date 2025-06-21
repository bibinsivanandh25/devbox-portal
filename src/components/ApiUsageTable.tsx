import { useEffect, useState } from 'react';

interface ApiUsage {
  id: number;
  name: string;
  time: string;
  status: string;
  responseTime: string;
}

export default function ApiUsageTable() {
  const [apiData, setApiData] = useState<ApiUsage[]>([]);

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const res = await fetch('/apiUsage.json');
        const data = await res.json();
        setApiData(data?.apiUsage);
      } catch (error) {
        console.log('Failed to fetch api usage:', error);
      }
    };
    fetchApiData();
  }, []);

  return (
    <div className="p-6 bg-gray-100 rounded shadow mt-6 max-sm:max-w-[275px] w-full mx-auto">
      <h3 className="text-lg font-bold mb-2">Recent API Usage</h3>
      <div className="w-full overflow-x-auto">
        <table className="w-full lg:max-w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b p-2">API Name</th>
              <th className="border-b p-2">Time</th>
              <th className="border-b p-2">Status</th>
              <th className="border-b p-2">Response Time</th>
            </tr>
          </thead>
          <tbody>
            {apiData.map((item, i) => (
              <tr key={i}>
                <td className="p-2">{item?.name}</td>
                <td className="p-2">{item?.time}</td>
                <td className="p-2">{item?.status}</td>
                <td className="p-2">{item?.responseTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
