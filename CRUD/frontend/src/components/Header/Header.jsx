import { Link } from 'react-router-dom';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
        <div className={classes.menu}>
            <Link to="/">Routes</Link>
            <Link to="/create">Create Route</Link>
        </div>
    </header>
  );
};

export default Header;
