"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
    const path = usePathname();
    const activeNav = path;

    return (
        <div className="w-64 h-[100vh] text-white p-4 bg-gray-600 fixed">
            <h2 className="text-2xl font-bold mb-4">Playground</h2>
            <nav>
                <ul>
                    <li className={"rounded-lg mb-2 " + (activeNav == "/oop" ? "bg-gray-800" : "")}>
                        <Link href="/oop">
                            <span className="block px-4 py-2 hover:bg-gray-700 rounded">OOP</span>
                        </Link>
                    </li>
                    <li className={"rounded-lg mb-2 " + (activeNav == "/dropdown" ? "bg-gray-800" : "")}>
                        <Link href="/dropdown">
                            <span className="block px-4 py-2 hover:bg-gray-700 rounded">Dependent Dropdown</span>
                        </Link>
                    </li>
                    <li className={"rounded-lg mb-2 " + (activeNav == "/query" ? "bg-gray-800" : "")}>
                        <Link href="/query">
                            <span className="block px-4 py-2 hover:bg-gray-700 rounded">Query Optimization</span>
                        </Link>
                    </li>
                    <li className={"rounded-lg " + (activeNav == "/profile" ? "bg-gray-800" : "")}>
                        <Link href="/profile">
                            <span className="block px-4 py-2 hover:bg-gray-700 rounded">Profile</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
