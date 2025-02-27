import "./globals.css";
import Sidebar from "./components/Sidebar";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <Sidebar />
          <main className="ms-[255px] p-3">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
