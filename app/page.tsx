"use client";

import Image from "next/image";

export default function Home() {

  const startChat = () => {

  }
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <h1>Meet Someone to chat with before the live?</h1>
        <Image className="" src="/chat.avif" alt="" width={100} height={200} />
      </div>

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <div className="flex space-x-4">
            <button
              className="bg-white text-black border border-black px-6 py-3 rounded-lg shadow"
              onClick={startChat}
            >
              Yes
            </button>
            <button className="bg-black text-white px-6 py-3 rounded-lg shadow">
              No
            </button>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
