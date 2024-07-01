import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="flex items-center">
        <div className="ps-8">
            <h1 className="text-lg pt-4">Celescadev</h1>
        </div>
        <div>
            <ul className="flex justify-end pt-4 pr-8">
                <li className="pr-4">
                    <a href="https://celescadev.com" className="hover:text-blue-500">Home</a>
                </li>
                <li className="pr-4">
                    <a href="https://celescadev.com/about" className="hover:text-blue-500">About</a>
                </li>
                <li className="pr-4">
                    <a href="https://celescadev.com/contact" className="hover:text-blue-500">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;