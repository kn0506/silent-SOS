"use client";

import Link from "next/link";
import { FaBars, FaHome, FaSignInAlt, FaTimes } from "react-icons/fa";
import { useAuthStore } from "../store/useAuthStore";
import { useState } from "react";

/**
 * 全ページの共通レイアウト
 * @return 各ページのコンテンツ
 */
export default function NavBar() {
  /** ログイン状況 */
  const isAuth = useAuthStore((state) => state.isAuth);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <ul className="flex space-x-8 items-center">
        <li>
          <Link href="/" className="flex items-center space-x-2">
            <FaHome size={28} />
          </Link>
        </li>
        <li className="ml-auto">
          {/* ハンバーガーアイコン */}
          <button onClick={() => setIsOpen(true)} className="ml-auto">
            <FaBars size={28} />
          </button>

          {/* オーバーレイ（背景） */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-white bg-opacity-50 z-40"
              onClick={() => setIsOpen(false)}
            ></div>
          )}

          {/* サイドメニュー */}
          <div
            className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-lg z-50 transform transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* 閉じるボタン */}
            <div className="flex justify-end p-4">
              <button onClick={() => setIsOpen(false)}>
                <FaTimes size={24} />
              </button>
            </div>

            {/* メニューリスト */}
            <nav className="flex flex-col space-y-4 p-6">
              <Link
                href="/EventRegister"
                className="text-lg font-semibold hover:text-blue-600 text-black"
                onClick={() => setIsOpen(false)}
              >
                設定
              </Link>
              <Link
                href={isAuth ? "/Logout" : "/Login"}
                className="text-lg font-semibold text-black"
                onClick={() => setIsOpen(false)}
              >
                <span>{isAuth ? "Logout" : "Login"}</span>
              </Link>
              <Link
                href="/AboutApp"
                className="text-lg font-semibold hover:text-blue-600 text-black"
                onClick={() => setIsOpen(false)}
              >
                アプリの制作にあたって
              </Link>
            </nav>
          </div>
        </li>
      </ul>
    </nav>
  );
}
