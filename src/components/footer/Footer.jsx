export default function Footer() {
  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        <div>
          <h3 className="text-xl font-semibold mb-4">Nayan Dhinoja</h3>
          <p className="text-gray-400">
            UK Chartered Accountants for modern global businesses.
          </p>
        </div>

        <div>
          <h4 className="mb-4">Services</h4>
          <ul className="text-gray-400 space-y-2">
            <li>Tax</li>
            <li>Accounting</li>
            <li>Advisory</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4">Contact</h4>
          <p className="text-gray-400">info@email.com</p>
        </div>

      </div>

      <div className="text-center text-gray-500 mt-16">
        © 2026 Nayan Dhinoja
      </div>
    </footer>
  );
}
