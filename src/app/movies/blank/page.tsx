'use client';

import Modal from '@/app/_components/Modal';
import { useEffect, useState } from 'react';

export default function MoviesBlank() {
    const [timer, setTimer] = useState(30);
    const [text, setText] = useState('니 _ _ _, _ _ _');

    useEffect(() => {
        let timeoutTimer = setTimeout(() => {
            setTimer((timer) => timer - 1);
        }, 1000);

        // 0초가 되면 타이머가 멈춘다.
        if (timer <= 0) {
            return clearTimeout(timeoutTimer);
        }

        // 5초 경과
        if (timer <= 10) {
            setText('니_ 가 라, 하 와 _');
        } else if (timer <= 15) {
            setText('니_ _ 라, 하 와 _');
        } else if (timer <= 20) {
            setText('니_ _ 라, 하 _ _');
        } else if (timer <= 25) {
            setText('니_ _ _, 하 _ _');
        }

        // 컴포넌트가 사라질 때 타이머를 없앤다
        return () => {
            clearTimeout(timeoutTimer);
        };
    }, [timer]);

    return (
        <div className="max-w-[360px] mx-auto py-10">
            <div className="text-center font-bold text-xl">하나둘셋 땡!</div>
            <div className="w-fit ml-auto mt-5">
                <Modal>정답보기</Modal>
                <div className="mt-2 w-fit mx-auto font-bold text-error">
                    {timer}
                </div>
            </div>

            {/* 명대사 */}
            <div className="mt-52 mx-auto w-fit font-bold text-4xl">{text}</div>
            <div className="h-8 mt-10">
                {timer <= 5 && (
                    <div className="font-bold w-fit mx-auto text-2xl">
                        [ 영화 제목 : <span className="text-error">친구</span> ]
                    </div>
                )}
            </div>
            {/* 정답 보기 버튼 */}
            <div className="mx-auto mt-[17.2rem] flex gap-3">
                <div className="btn btn-outline btn-error flex-1">PASS</div>
                <div className="btn btn-outline btn-info flex-1">정답!</div>
            </div>
        </div>
    );
}
