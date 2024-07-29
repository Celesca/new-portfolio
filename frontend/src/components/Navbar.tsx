import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="flex items-center pb-4 navbar-container">
        <div className="ps-8 mr-16">
            <h1 className="text-lg pt-4">Celescadev</h1>
        </div>
        <div>
            <ul className="flex justify-end pt-4 pr-8">
                <li className="pr-4">
                    <a href="/" className="hover:text-blue-500 pr-8">Home</a>
                </li>
                <li className="pr-4">
                    <a href="/book" className="hover:text-blue-500 pr-8">Book</a>
                </li>
                <li className="pr-4">
                    <a href="/contact" className="hover:text-blue-500">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;