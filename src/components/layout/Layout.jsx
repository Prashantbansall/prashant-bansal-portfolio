import Navbar from "./Navbar";
import Footer from "./Footer";
import AnimatedBackground from "../effects/AnimatedBackground";
import ScrollProgress from "../effects/ScrollProgress";

function Layout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050816] text-slate-50">
      <ScrollProgress />
      <AnimatedBackground />
      <Navbar />

      <main className="relative z-10">{children}</main>

      <Footer />
    </div>
  );
}

export default Layout;
