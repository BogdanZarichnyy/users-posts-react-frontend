import { NavButton } from "../nav-button";
import { BsPostcard } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";

export const NavBar = () => {
  return (
    <nav>
      <ul className="flex flex-col gap-5">
        <li>
          <NavButton href="/" icon={<BsPostcard />}>
            Пости
          </NavButton>
        </li>
        <li>
          <NavButton href="following" icon={<FiUsers />}>
            Підписки
          </NavButton>
        </li>
        <li>
          <NavButton href="followers" icon={<FaUsers />}>
            Підписчики
          </NavButton>
        </li>
      </ul>
    </nav>
  );
}