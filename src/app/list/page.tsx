export default function List() {
    return (
        <div>
            <header className="h-20 w-full border-b border-gray-300 px-60 flex">
                <div className="self-center">
                    <img src="/assets/imgs/ddaeng-small-logo.png" />
                </div>
            </header>
            <div className="px-60 mt-[92px]">
                <h1 className="text-3xl font-bold">
                    하고 싶은 게임을 선택해보세요
                </h1>
                <div className="flex gap-32 mt-[103px]">
                    {/* 카드1 */}
                    <div className="flex-1 border border-gray-300 rounded-3xl py-[114px] shadow-sm px-10 hover:border-blue-300 hover:shadow-blue-100">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold">
                                영화 명대사 맞추기
                            </h2>
                            <p className="text-gray-500 text-lg mt-12">
                                시간내에 명대사 빈칸을 맞춰요
                            </p>
                        </div>
                    </div>
                    {/* 카드2 */}
                    <div className="flex-1 border border-gray-300 rounded-3xl py-[114px] shadow-sm px-10  hover:border-blue-300 hover:shadow-blue-100">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold">
                                명대사 보고 영화 제목 맞추기
                            </h2>
                            <p className="text-gray-500 text-lg mt-12">
                                카드를 뒤집어서 빈칸을 확인해 제목을 맞춰요
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
