"use client";

import "./globals.css";
import { ReactNode, useState } from "react";
import NavBar from "@/components/NavBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

/**
 * 全ページの共通レイアウト
 * @return 各ページのコンテンツ
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="ja">
      <body className="h-screen flex flex-col">
        <QueryClientProvider client={queryClient}>
          <main className="flex-1 overflow-hidden">{children}</main>
          <NavBar />
        </QueryClientProvider>
      </body>
    </html>
  );
}
