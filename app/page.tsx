"use client";

import EmergencyButton from "@/components/EmergencyButton";

/**
 * ホーム画面
 */
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center p-4 bg-gray-100 min-h-screen w-full">
      <div className="bg-white rounded-xl shadow-md w-full max-w-md divide-y divide-gray-200 my-4">
        <div className="p-6 text-center">
          <h2 className="text-sm text-gray-500">eventName</h2>
          <p className="text-2xl font-semibold text-gray-800">
            新木場STUDIO COAST
          </p>
        </div>
        <div className="p-6 text-center">
          <h2 className="text-sm text-gray-500">block/seat</h2>
          <p className="text-2xl font-semibold text-gray-800">A</p>
        </div>
      </div>
      <div className="w-full flex justify-center my-4">
        <EmergencyButton />
      </div>
    </div>
  );
}
