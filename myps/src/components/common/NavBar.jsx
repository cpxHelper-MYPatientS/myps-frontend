import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import AlarmIcon from "../../assets/common/alarm.svg";
import CouponIcon from "../../assets/common/coupon.svg";
import UserIcon from "../../assets/common/user.svg";

const NavBar = () => {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
  };
  const categories = [
    { img: AlarmIcon, text: "알림" },
    { img: CouponIcon, text: "이용권 구매" },
    { img: UserIcon, text: "마이페이지" },
  ];
  return (
    <div className="flex justify-between px-[22.5rem] py-4 border-b border-b-violet-10 shadow-custom1 bg-white w-full h-20">
      <img src={Logo} className="cursor-pointer" onClick={handleLogoClick} />
      <div className="flex gap-5">
        {categories.map((category, index) => (
          <div key={index} className="flex items-center gap-1 cursor-pointer">
            <img src={category.img} />
            <div>{category.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default NavBar;
