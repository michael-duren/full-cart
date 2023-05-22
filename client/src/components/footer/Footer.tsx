import { createElement } from 'react';
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillGithub,
} from 'react-icons/ai';

const links = [
  { link: 'asdf', name: 'LinkedIn', icon: AiFillLinkedin },
  { link: 'asdf', name: 'Twitter', icon: AiFillTwitterCircle },
  { link: 'asdf', name: 'GitHub', icon: AiFillGithub },
];

export default function Footer() {
  return (
    <footer className="absolute p-4 flex items-center justify-between w-full bottom-[0%]">
      <div className="text-xs text-gray-400">
        <div>fullCart 2023</div>
        <div>Michael Duren</div>
      </div>
      <ul className="flex gap-1 text-gray-400">
        {links.map((link) => {
          return (
            <a key={link.name} href={link.link}>
              <li className="hover:text-gray-700">
                {createElement(link.icon, { size: 25 })}
              </li>
            </a>
          );
        })}
      </ul>
    </footer>
  );
}
