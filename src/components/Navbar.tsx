
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold">
            Группы крови и заболевания
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="hover:text-accent-foreground px-3 py-2 rounded-md">
              Главная
            </Link>
            <Link to="/blood-groups" className="hover:text-accent-foreground px-3 py-2 rounded-md">
              Группы крови
            </Link>
            <Link to="/diseases" className="hover:text-accent-foreground px-3 py-2 rounded-md">
              Заболевания
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
