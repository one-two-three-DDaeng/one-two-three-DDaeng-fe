'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Count() {
    const [count, setCount] = useState(10);
    const router = useRouter();

    return (
        <div className="max-w-[360px] mx-auto mt-11 px-6">
            <div className="flex gap-12">
                <img src="/assets/imgs/back.svg" className="w-7 h-7" />
                <div className="text-center text-sm self-center">
                    명대사 보고 빈칸 맞추기
                </div>
            </div>

            <div className="text-center mt-10 text-lg font-semibold">
                문제 개수를 설정해주세요
            </div>

            {/* 타이머 */}
            <div className="mt-44">
                <div className="flex">
                    {/* 빼기 */}
                    <div
                        className="self-center"
                        onClick={() => setCount((count) => count - 1)}
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
                    <div className="text-9xl font-bold mx-auto w-fit my-5">
                        {count}
                    </div>

                    {/* 추가 */}
                    <div
                        className="self-center"
                        onClick={() => setCount((count) => count + 1)}
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
                <div className="relative w-full ">
                    <div className="absolute mx-auto w-full bottom-[calc(100%-16rem)]">
                        <div
                            className="btn bg-[#387BF3] w-full text-white rounded-xl"
                            onClick={() => router.push('/movies/blank')}
                        >
                            시작하기
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
