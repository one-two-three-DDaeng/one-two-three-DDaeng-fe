import Link from 'next/link';

export default function Home() {
    return (
        <main>
            <Link href="/list">
                <div className="text-center mt-[8.25rem]">
                    <div className="mx-auto w-fit">
                        <img
                            src="/assets/imgs/ddaeng-main-logo.png"
                            className="w-[300px] mx-auto mt-[202px]"
                        />
                        <img
                            src="/assets/imgs/rabbit.png"
                            className="w-[214px] mx-auto mt-[92px]"
                        />
                    </div>
                    <div className="mt-8">
                        <p className="font-bold text-[#88BED6] text-xl">
                            화면을 터치해주세요
                        </p>
                    </div>
                </div>
            </Link>
        </main>
    );
}
