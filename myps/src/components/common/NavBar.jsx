import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import AlarmIcon from "../../assets/common/alarm.svg";
import CouponIcon from "../../assets/common/coupon.svg";
import UserIcon from "../../assets/common/user.svg";
import CaseIcon from "../../assets/common/case-small.svg";
import PhysicIcon from "../../assets/common/physical-small.svg";
import NoteIcon from "../../assets/common/note-small.svg";

const NavBar = ({ isMain = true }) => {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
  };
  const handleCaseClick = () => {
    navigate("/case");
  };
  const categories = [
    { img: AlarmIcon, text: "알림" },
    { img: CouponIcon, text: "이용권 구매" },
    { img: UserIcon, text: "마이페이지" },
  ];
  const Addedcategories = [
    { img: CaseIcon, text: "CASE 연습", onClick: handleCaseClick },
    { img: PhysicIcon, text: "신체검진" },
    { img: NoteIcon, text: "정리노트" },
  ];

  return (
    <div className="flex justify-between px-[22.5rem] py-4 border-b border-b-violet-10 shadow-custom1 bg-white w-full h-20">
      <div className="flex justify-between w-[75rem]">
        <div className="flex gap-10">
          <img
            src={Logo}
            className="w-[10rem] h-[2.75rem] cursor-pointer"
            onClick={handleLogoClick}
          />
          {isMain ? (
            ""
          ) : (
            <div className="flex gap-[3.25rem]">
              {Addedcategories.map((category, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 font-medium cursor-pointer"
                  onClick={category.onClick}
                >
                  <img src={category.img} />
                  <div>{category.text}</div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex gap-5">
          {categories.map((category, index) => (
            <div key={index} className="flex items-center gap-1 cursor-pointer">
              <img src={category.img} />
              <div>{category.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default NavBar;
