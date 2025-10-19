"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

/** 通知受け取り画面
 *  @return 他ユーザーから通報を受けた際のページ
 */
export default function NotificationReceived() {
  const router = useRouter();

  return <div className="flex items-center justify-center bg-gray-100"></div>;
}
