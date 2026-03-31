export default function Button({ children }) {
  return (
    <button className="px-6 py-3 rounded-full bg-white text-black text-sm tracking-wide hover:scale-105 transition duration-300">
      {children}
    </button>
  );
}
