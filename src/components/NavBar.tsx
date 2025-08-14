"use client";

import Link from "next/link";
import { FaHome, FaSignInAlt } from "react-icons/fa";
import { useAuthStore } from "../store/useAuthStore";

export default function NavBar() {
  const isAuth = useAuthStore((state) => state.isAuth);

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <ul className="flex space-x-8 items-center">
        <li>
          <Link
            href="/"
            className="flex items-center space-x-2 hover:text-yellow-300"
          >
            <FaHome />
            <span>ホーム</span>
          </Link>
        </li>
        <li>
          <Link
            href={isAuth ? "/logout" : "/login"}
            className="flex items-center space-x-2 hover:text-yellow-300"
          >
            <FaSignInAlt />
            <span>{isAuth ? "ログアウト" : "ログイン"}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
