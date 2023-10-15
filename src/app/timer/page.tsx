"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Timer() {
  const [timer, setTimer] = useState(60);
  const router = useRouter();

  return (
    <div className="max-w-[360px] mx-auto py-10 ">
      <div className="text-center font-bold text-xl">하나둘셋 땡!</div>

      <div className="text-center mt-10 text-lg">제한시간을 설정해주세요</div>

      {/* 타이머 */}
      <div className="mt-48">
        <div className="flex">
          {/* 빼기 */}
          <div
            className="self-center"
            onClick={() => setTimer((timer) => timer - 10)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              className="cursor-pointer"
            >
              <path
                fill="currentColor"
                d="M18 11H6a2 2 0 0 0 0 4h12a2 2 0 0 0 0-4z"
              />
            </svg>
          </div>

          {/* 타이머 */}
          <div className="text-9xl font-bold mx-auto w-fit my-5">{timer}</div>

          {/* 추가 */}
          <div
            className="self-center"
            onClick={() => setTimer((timer) => timer + 10)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              className="cursor-pointer"
            >
              <path
                fill="currentColor"
                d="M18 10h-4V6a2 2 0 0 0-4 0l.071 4H6a2 2 0 0 0 0 4l4.071-.071L10 18a2 2 0 0 0 4 0v-4.071L18 14a2 2 0 0 0 0-4z"
              />
            </svg>
          </div>
        </div>

        {/* 시작 버튼 */}
        <div className="mx-auto mt-52">
          <div
            className="btn btn-outline btn-error w-full"
            onClick={() => router.push("/movies")}
          >
            start
          </div>
        </div>
      </div>
    </div>
  );
}
