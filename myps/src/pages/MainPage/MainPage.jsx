import React from "react";
import NavBar from "../../components/common/NavBar";
import token from "../../assets/common/token.svg";
import quiz from "../../assets/mainPage/quiz.svg";
import MainMenu from "../../components/MainPage/MainMenu";
import caseIcon from "../../assets/mainPage/case.svg";
import physicIcon from "../../assets/mainPage/physical.svg";
import noteIcon from "../../assets/mainPage/note.svg";
import CustomCase from "../../components/MainPage/CustomCase";

const MainPage = () => {
    return(
    <div className="flex flex-col pb-10 gap-[4.5625rem]">
    <NavBar />
    <div className="mx-[22.5rem]">
        <div className="flex flex-col gap-[6.125rem]">
            <div className="flex flex-col gap-5">
                <div className="flex justify-between items-end ">
                    <div className="flex flex-col">
                        <span className="text-cgray-900">김현주님의 예정된 일정은?</span>
                        <div className="flex text-violet-600 text-h1 font-bold gap-5">
                        CPX 실기시험<span>D-20</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        금일 잔여 연습횟수
                        <div className="flex items-center text-b2 font-bold">
                            <img className="w-10 h-10" src={token}/>
                            20개
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center bg-white px-10 py-2 gap-8 border border-cgray-100 rounded-[0.625rem]">
                        <div className="flex items-center gap-2 font-bold text-cgray-900">
                            <img className="w-10 h-10" src={quiz}/>
                            오늘의 QUIZ
                        </div>
                        <span className="text-cgray-700">“변비 환자에 필요한 신체 검진은?”</span>
                </div>
                <div className="flex gap-5 ">
                    <MainMenu title="CASE 연습" isSub={true} iconSrc={caseIcon}/>
                    <MainMenu title="신체검진" iconSrc={physicIcon}/>
                    <MainMenu title="노트 정리" iconSrc={noteIcon}/>
                </div>
            </div>
            <CustomCase />
        </div>
        
      </div>
       </div>)
};
export default MainPage;
