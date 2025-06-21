import ApiUsageTable from '../components/ApiUsageTable';
import UserProfile from '../components/UserProfile';

const Dashboard = () => {
  return (
    <div className="bg-[#eee] min-h-screen w-full flex flex-col justify-center overflow-hidden">
      <div className="mx-auto max-w-4xl p-6 border rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-6">DevBox Developer Portal</h1>
        <UserProfile />
        <ApiUsageTable />
      </div>
    </div>
  );
};

export default Dashboard;
