import "../styles/globals.css";
import "@fontsource/inter/index.css";
import SmoothScroll from "../components/SmoothScroll";
import Cursor from "../components/Cursor";

export const metadata = {
  title: "Nayan Dhinoja",
  description: "Future-ready UK Chartered Accountants",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#050505] text-white font-sans">
        <SmoothScroll>{children}</SmoothScroll>
        <Cursor />
      </body>
    </html>
  );
}
