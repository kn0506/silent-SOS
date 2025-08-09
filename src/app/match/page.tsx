"use client";

import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../store/useAuthStore";

export default function MatchPage() {
  const router = useRouter();

  const logout = async () => {
    // Firebase認証でユーザーをログアウト
    await signOut(auth);
    // ZustandのuseAuthStoreから、ログイン状態(false)で更新
    useAuthStore.getState().setAuth(false);
    // ホームに遷移
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          onClick={logout}
        >
          ログアウトする
        </button>
      </div>
    </div>
  );
}
