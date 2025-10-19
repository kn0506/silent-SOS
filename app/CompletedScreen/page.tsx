"use client";

import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

/**
 * 通知完了画面
 * @return 他ユーザーからの通知
 */
export default function CompletedScreen() {
  const router = useRouter();

  const goHome = async () => {
    router.push("/");
  };
  return (
    <div className="flex flex-col items-center justify-center bg-green-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <CheckCircleIcon className="w-20 h-20 text-green-500 mx-auto mb-4" />

        <h1 className="text-3xl font-bold text-green-600 mb-4">
          通報を受け付けました
        </h1>
        <p className="text-lg text-gray-700 font-bold mb-6 leading-relaxed">
          スタッフが向かっています。
        </p>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          onClick={goHome}
        >
          ホーム画面に戻る
        </button>
      </div>
    </div>
  );
}
