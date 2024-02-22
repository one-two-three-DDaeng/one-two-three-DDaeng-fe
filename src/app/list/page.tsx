export default function List() {
    return (
        <div className="mx-6">
            <div className="mt-[120px]">
                <h1 className="text-3xl font-bold">하나둘셋 땡!</h1>
                <h1 className="text-base text-[#7E7E7E] mt-1">
                    하고 싶은 게임을 선택해보세요
                </h1>
                <div className="mt-7 tracking-tighter">
                    {/* 카드1 */}
                    <div className="btn btn-ghost w-full py-4 px-3 h-auto border border-gray-300 rounded-xl shadow-md mb-6 block text-left">
                        <div>
                            <div className="flex justify-between mb-0.5">
                                <h2 className="text-base font-black">
                                    영화 명대사 맞추기
                                </h2>
                                <div>
                                    <img
                                        src="/assets/imgs/info-icon.png"
                                        className="w-6 h-6"
                                    />
                                </div>
                            </div>
                            <p className="text-gray-500 text-sm">
                                시간내에 명대사 빈칸을 맞춰요
                            </p>
                        </div>
                    </div>
                    {/* 카드2 */}
                    <div className="btn btn-ghost w-full py-4 px-3 h-auto border border-gray-300 rounded-xl shadow-md mb-6 block text-left">
                        <div>
                            <div className="flex justify-between mb-0.5">
                                <h2 className="text-base font-black">
                                    명대사 보고 영화 제목 맞추기
                                </h2>
                                <div>
                                    <img
                                        src="/assets/imgs/info-icon.png"
                                        className="w-6 h-6"
                                    />
                                </div>
                            </div>
                            <p className="text-gray-500 text-sm">
                                카드를 뒤집어서 빈칸을 확인해 제목을 맞춰요
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
