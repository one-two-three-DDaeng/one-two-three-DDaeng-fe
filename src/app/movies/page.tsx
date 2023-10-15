"use client";

import { useState } from "react";

export default function Movies() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="max-w-[360px] mx-auto py-10">
      <div className="text-center font-bold text-xl">하나둘셋 땡!</div>
      <div className="w-fit ml-auto font-bold mt-10 text-error">60</div>

      {/* 명대사 */}
      <div className="mt-52 mx-auto w-fit font-bold text-4xl">
        우리가 돈이 없지,
      </div>
      <div className="text-4xl font-bold w-fit mx-auto mt-2">가오가 없냐?</div>

      {/* 정답 보기 버튼 */}
      <div className="mx-auto mt-[17.2rem]">
        <div className="btn btn-outline btn-info w-full">정답 보기</div>
        {/* <button className="btn" onClick={()=>document.getElementById('my_modal_1')!.showModal()}>open modal</button> */}
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
              Press ESC key or click the button below to close
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
}
