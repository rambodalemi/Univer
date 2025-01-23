import Footer from "@/components/shared/Footer";
import Nav from "@/components/shared/Nav";

export default function RootLayout({ children }) {
  return (
    <>
      <Nav />
      <div className="w-full">
        <div className="sm:p-4 space-y-4 sm:space-y-6 relative overflow-x-clip">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}
