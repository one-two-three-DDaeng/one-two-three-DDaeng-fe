'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();

    return (
        <div className="max-w-[360px] mx-auto mt-10 ">
            <div className="text-center font-bold text-xl">하나둘셋 땡!</div>
            {/* 카드 리스트 */}
            <div className="mt-10">
                <div className="card bg-base-100 shadow-xl my-5">
                    <div className="card-body">
                        <h2 className="card-title">영화 명대사 맞추기</h2>
                        <div className="card-actions justify-end">
                            <button
                                className="btn btn-error btn-outline btn-sm text-xs"
                                onClick={() => router.push('/timer')}
                            >
                                Start
                            </button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl my-5">
                    <div className="card-body">
                        <h2 className="card-title">영화 명대사 빈칸 맞추기</h2>
                        <div className="card-actions justify-end">
                            <button
                                className="btn btn-error btn-outline btn-sm text-xs "
                                onClick={() => router.push('/count')}
                            >
                                Start
                            </button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl my-5">
                    <div className="card-body">
                        <h2 className="card-title">노래 제목 맞추기</h2>
                        <div className="card-actions justify-end">
                            <button
                                className="btn btn-error btn-outline btn-sm text-xs"
                                onClick={() => router.push('/timer')}
                            >
                                Start
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
