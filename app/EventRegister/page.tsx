"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { validators } from "@/services/validation";
import { EventInfo } from "./EventRegister.model";

/**
 * イベント情報登録
 * @return 他ユーザーからの通知
 */
export default function EventRegister() {
  // useStateでエラーを管理
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const router = useRouter();

  /** イベント入力フォームの初期状態 */
  const [inputFormData, setInputFormData] = useState<EventInfo>({
    eventName: "",
    seatBlock: "",
    character: "",
  });

  /** 入力したイベント情報のセット */
  const inputEventInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /** イベント情報の保存 */
  const saveEventInfo = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    //リファクタリングする。
    //通報一覧画面作る 全員共通画面。(push通知にする)
    //firebaseとの連携

    // eventName
    const nameResult = validators.required(
      inputFormData.eventName,
      "event-name"
    );
    if (!nameResult.valid) newErrors.eventName = nameResult.message!;

    // seatBlock
    const seatResult = validators.required(
      inputFormData.seatBlock,
      "block/seat"
    );
    if (!seatResult.valid) newErrors.seatBlock = seatResult.message!;

    // character
    const charResult = validators.required(
      inputFormData.character,
      "nick-name"
    );
    if (!charResult.valid) newErrors.character = charResult.message!;
    setErrors(newErrors);

    // 保存処理
    if (Object.keys(newErrors).length === 0) {
      alert("Saved");
      router.push("/");
    } else {
      console.log("Object.keys(newErrors)", Object.keys(newErrors));
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <form
        onSubmit={saveEventInfo}
        className="bg-white p-6 rounded shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-xl font-bold">event-register</h2>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="eventName">
            event-name
          </label>
          <input
            id="eventName"
            name="eventName"
            type="text"
            value={inputFormData.eventName}
            onChange={inputEventInfo}
            placeholder="例: ROCK FEST 20XX"
            className="border border-gray-300 rounded w-full p-2"
            maxLength={40}
          />
          {errors.eventName && (
            <p className="text-red-500">{errors.eventName}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="seatBlock">
            block/seat
          </label>
          <input
            id="seatBlock"
            name="seatBlock"
            type="text"
            value={inputFormData.seatBlock}
            onChange={inputEventInfo}
            placeholder="例: A-12"
            className="border border-gray-300 rounded w-full p-2"
            maxLength={20}
          />
          {errors.seatBlock && (
            <p className="text-red-500">{errors.seatBlock}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="character">
            nick-name
          </label>
          <input
            id="character"
            name="character"
            type="text"
            value={inputFormData.character}
            onChange={inputEventInfo}
            placeholder="例: nickName"
            className="border border-gray-300 rounded w-full p-2"
            maxLength={40}
          />
          {errors.character && (
            <p className="text-red-500">{errors.character}</p>
          )}
        </div>
        {/* 設定項目の追加 */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Save
        </button>
      </form>
    </div>
  );
}
