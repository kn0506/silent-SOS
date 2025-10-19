"use client";

import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";
import { auth, provider } from "@/services/firebase";

/**
 * ログインページ
 */
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  /** ログイン処理 */
  const loginWithGoogle = async () => {
    // Googleログイン用のポップアップを開いて認証する
    await signInWithPopup(auth, provider);
    // ZustandのuseAuthStoreから、ログイン状態(true)で更新
    useAuthStore.getState().setAuth(true);
    // ホームに遷移
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">ログイン</h2>
        <label className="block mb-2">
          メールアドレス
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full border rounded p-2"
            required
          />
        </label>
        <label className="block mb-4">
          パスワード
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full border rounded p-2"
            required
          />
        </label>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          onClick={loginWithGoogle}
        >
          gmailでLogin
        </button>
      </div>
    </div>
  );
}
