import Sidebar from "@/components/(auth)/Sidebar/Sidebar.jsx";
import Navbar from "@/components/(auth)/Navbar.jsx";

export default function Layout({children}) {
  return (
    <>
      <div className="flex min-h-screen">
        <Sidebar/>
        <main className="w-full">
          <Navbar/>
          <div className="p-20">
            {children}
          </div>
        </main>
      </div>
    </>
  )
}
