"use client";

/**
 * アプリのコンセプト
 */
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center p-4 bg-gray-100 min-h-screen w-full">
      <div className="bg-white rounded-xl shadow-md w-full max-w-md divide-y divide-gray-200 my-4">
        <div className="p-6 text-center">
          <p className="text-2xl font-semibold text-gray-800">
            このアプリについて
          </p>
        </div>
      </div>
    </div>
  );
}