import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="bg-neutral-100">
      <main className="max-w-5xl pt-28 sm:pt-36 pb-6 px-6 mx-auto space-y-64">
        <Outlet />
        <div className="flex justify-between">
          <p>2025 &copy; Edition</p>
          <a target="_blank" href="https://github.com/devswithme">
            Github
          </a>
        </div>
      </main>
    </div>
  );
};

export default Layout;
