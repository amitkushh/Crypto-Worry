import { Link } from "react-router-dom";
import { Button } from "../ui/button";


function Navbar() {
  return (
    <header className="flex justify-between items-center py-5 border-b px-5 sm:px-15 md:px-20 lg:px-25">
      <div className="text-xl font-semibold">Crypto Worry</div>
      <div>
        <ul className="flex justify-center items-center gap-5 ">
          <li className="text-(--grey) hover:text-white transition-all ease-in-out duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-white text-(--grey) transition-all ease-in-out duration-300">
            <Link to="/compare">Compare</Link>
          </li>
          <li className="hover:text-white text-(--grey) transition-all ease-in-out duration-300">
            <Link to="/watchlist">Watchlist</Link>
          </li>
          <Link to="/dashboard"><Button>Dashboard</Button></Link>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
