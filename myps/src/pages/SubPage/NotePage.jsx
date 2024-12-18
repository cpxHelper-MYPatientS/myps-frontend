import { useState } from "react";
import NavBar from "../../components/common/NavBar";
import Subject from "../../components/MainPage/Subject";
import SummaryNote from "../../components/SubPage/SummaryNote";
import Pagination from "../../components/MainPage/Pagination";
const NotePage = () => {
  const subjects = [
    "전체",
    "순환기",
    "호흡기",
    "소화기",
    "신장/비뇨",
    "관절/근골격/피부",
    "전신",
    "정신/신경",
    "산부/여성/소아",
    "상담",
  ];
  const [activeSubject, setActiveSubject] = useState("전체");
  const [currentPage, setCurrentPage] = useState(1);
  const [complaintPages, setComplaintPages] = useState({});

  // 예시 데이터 (실제로는 API에서 받아올 데이터)
  const mockNotes = Array(30)
    .fill()
    .map((_, i) => ({
      id: i,
      subject: "호흡기",
      chiefComplaint:
        activeSubject !== "전체"
          ? ["가슴통증", "실신", "호흡곤란"][i % 3]
          : null,
    }));

  const handlePageChange = (complaint, newPage) => {
    setComplaintPages((prev) => ({
      ...prev,
      [complaint]: newPage,
    }));
  };

  const getCurrentNotesByComplaint = (complaint) => {
    const currentComplaintPage = complaintPages[complaint] || 1;
    const filteredNotes = mockNotes.filter(
      (note) => note.chiefComplaint === complaint
    );
    const startIndex = (currentComplaintPage - 1) * 4;
    return filteredNotes.slice(startIndex, startIndex + 4);
  };

  const getCurrentAllNotes = () => {
    const startIndex = (currentPage - 1) * 12;
    return mockNotes.slice(startIndex, startIndex + 12);
  };

  return (
    <div className="flex flex-col pb-10">
      <NavBar isMain={false} selectedMenu="정리노트" />
      <div className="w-[75rem] mx-auto">
        <div className="flex flex-col gap-[1.8125rem]">
          <div className="mt-[5.375rem] text-h1 font-bold">정리노트</div>
          {/* 과목선택 탭  */}
          <div className="flex gap-3 items-center w-full">
            {subjects.map((subject, index) => (
              <Subject
                key={index}
                onClick={() => setActiveSubject(subject)}
                subject={subject}
                isSelected={activeSubject === subject}
              />
            ))}
          </div>
          {/* 노트 뷰 */}
          {activeSubject !== "전체" && (
            <div className="flex flex-col gap-4">
              {Array.from(
                new Set(mockNotes.map((note) => note.chiefComplaint))
              ).map((complaint, index) => (
                <div key={index} className="mb-10">
                  <h2 className="text-t1 text-cgray-900 font-bold mb-6">
                    {complaint}
                  </h2>
                  <div className="grid grid-cols-4 gap-4">
                    {getCurrentNotesByComplaint(complaint).map((note, i) => (
                      <SummaryNote key={i} subject={note.subject} />
                    ))}
                  </div>
                  <Pagination
                    total={
                      mockNotes.filter(
                        (note) => note.chiefComplaint === complaint
                      ).length
                    }
                    limit={4}
                    page={complaintPages[complaint] || 1}
                    setPage={(newPage) => handlePageChange(complaint, newPage)}
                  />
                </div>
              ))}
            </div>
          )}

          {activeSubject === "전체" && (
            <>
              <div className="grid grid-cols-4 gap-4">
                {getCurrentAllNotes().map((note, i) => (
                  <SummaryNote key={i} subject={note.subject} />
                ))}
              </div>
              <Pagination
                total={mockNotes.length}
                limit={12}
                page={currentPage}
                setPage={setCurrentPage}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default NotePage;
