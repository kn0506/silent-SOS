"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { EventInfo } from "../../app/EventRegister/EventRegister.model";

/**
 * 全ページの共通レイアウト
 * @return 各ページのコンテンツ
 */
export default function EmergencyButton() {
  const router = useRouter();
  /** 通報最終確認アラート状態管理 */
  const [open, setOpen] = useState(false);

  /** 通報処理結果 */
  const mutation = useMutation({
    mutationFn: (eventInfo: EventInfo) => callReportApi(eventInfo),
    onSuccess: () => {
      setOpen(false);
      alert("通報しました。");
    },
    onError: () => {
      alert("通報に失敗しました。");
    },
  });

  /** 通報ボタン押下 */
  const onReport = () => setOpen(true);
  /** キャンセルボタン押下 */
  const onCancel = () => setOpen(false);
  /** 最終確認ボタン押下 */
  //登録したイベント情報をpropsで受け取って引数に渡す。(idはAPIで新規作成されて返却される予定)
  const onConfirm = () => {
    mutation.mutate({
      eventName: "ROCK FEST 20XX", // ページで選択しているイベントID
      seatBlock: "A-12", // ログイン中のユーザーID
      character: "nickName", // ユーザーが入力した場所
    });
  };

  /** 通報処理 API呼び出し */
  async function callReportApi(eventInfo: EventInfo): Promise<void> {
    const res = await fetch("/api/report", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventInfo),
    });
    if (!res.ok) throw new Error("Failed to report");
    router.push("CompletedScreen");
  }

  return (
    <>
      <button
        type="submit"
        className={`p-2 py-3 text-2xl font-bold rounded w-full h-full
          ${
            mutation.isSuccess
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-red-600 text-white hover:bg-red-700"
          }`}
        onClick={onReport}
        disabled={mutation.isPending || mutation.isSuccess}
      >
        {mutation.isPending
          ? "送信中..."
          : mutation.isSuccess
          ? "通報済み"
          : "Help Me!"}
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="confirm-title"
          className="fixed inset-0 flex items-center justify-center bg-black/50"
        >
          <div className="rounded-lg bg-white p-4 w-[320px]">
            <h2 id="confirm-title" className="text-lg font-semibold">
              本当に通報しますか？
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              この操作は取り消せないです。
            </p>
            <div className="mt-4 flex justify-end gap-2">
              <button onClick={onCancel} disabled={mutation.isPending}>
                キャンセル
              </button>
              <button
                type="submit"
                onClick={onConfirm}
                disabled={mutation.isPending}
              >
                {mutation.isPending ? "送信中..." : "通報する"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
