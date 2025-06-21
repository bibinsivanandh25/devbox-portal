const UserProfile = () => {
  const email = localStorage.getItem('user');
  const username = email?.split('@')[0];

  return (
    <div className="p-6 bg-gray-100 rounded shadow">
      <h3 className="text-lg font-bold mb-2">Profile</h3>
      <p>
        <strong>Name:</strong> {username || 'user'}
      </p>
      <p>
        <strong>Email:</strong> {email || 'user@gmail.com'}
      </p>
      <p>
        <strong>Role:</strong> Frontend Developer
      </p>
    </div>
  );
};

export default UserProfile;
