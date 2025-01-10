import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="w-1/2 bg-black flex items-center justify-center">
        <div className="max-w-md text-center">
          <h2 className="text-4xl font-bold text-white">
            Welcome to ECommerce Shopping
          </h2>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
