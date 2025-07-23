import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <nav className="bg-blue-600 text-white p-4 flex gap-4">
        <Link className="hover:underline" to="/">Home</Link>
        <Link className="hover:underline" to="/about">About</Link>
        <Link className="hover:underline" to="/contact">Contact</Link>
      </nav>
      <main className="p-6">
        <Outlet />
      </main>
    </>
  );
}
