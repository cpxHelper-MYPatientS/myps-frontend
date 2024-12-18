import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import AlarmIcon from "../../assets/common/alarm.svg";
import CouponIcon from "../../assets/common/coupon.svg";
import UserIcon from "../../assets/common/user.svg";

const NavBar = ({ isMain = true, selectedMenu }) => {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
  };
  const handleCaseClick = () => {
    navigate("/case");
  };
  const handleNoteClick = () => {
    navigate("/note");
  };
  const categories = [
    { img: AlarmIcon, text: "알림" },
    { img: CouponIcon, text: "이용권 구매" },
    { img: UserIcon, text: "마이페이지" },
  ];
  const Addedcategories = [
    { text: "CASE 연습", onClick: handleCaseClick },
    { text: "신체검진" },
    { text: "정리노트", onClick: handleNoteClick },
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
            <div className="flex gap-4">
              {Addedcategories.map((category, index) => (
                <div
                  key={index}
                  className={`flex items-center px-4 cursor-pointer ${
                    selectedMenu === category.text
                      ? "text-violet-600 font-bold"
                      : ""
                  }`}
                  onClick={category.onClick}
                >
                  {category.text}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex gap-5">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex items-center gap-1 text-cgray-800 cursor-pointer"
            >
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
