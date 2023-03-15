import { Link } from 'react-router-dom';
import style from './style/style.css';

export default function Navbar() {
  return (
    <>
      <div className={style.app}>
        <nav className="navContainer">
          <div className="title">
            <img className="space" src="./aspects/Space.png" alt="space logo" />
            <h1 className="navHeader">Space Traveler&apos;s Hub</h1>
          </div>
          <ul className="navLinks">
            <li>
              <Link className="/navRockets" to="/rockets">
                Rockets
              </Link>
            </li>
            <li>
              <Link className="navMissions" to="/missions">
                Missions
              </Link>
            </li>
            <li className="navBorderLine" />
            <li>
              <Link className="navMyProfile" to="/myProfile">
                My Profile
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
