import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Playground</h1>
          <p className="text-lg mb-4">Click the button below to get started</p>
          <Link href="/oop">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
