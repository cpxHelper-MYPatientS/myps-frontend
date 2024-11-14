import Logo from "../../assets/logo.svg";
import AlarmIcon from "../../assets/common/alarm.svg";
import CouponIcon from "../../assets/common/coupon.svg";
import UserIcon from "../../assets/common/user.svg";

const NavBar = () => {
  const categories = [
    { img: AlarmIcon, text: "알림" },
    { img: CouponIcon, text: "이용권 구매" },
    { img: UserIcon, text: "마이페이지" },
  ];
  return (
    <div className="flex justify-between px-[22.5rem] py-4 border-b border-b-violet-10 shadow-custom1 bg-white w-full h-20">
      <img src={Logo} />
      <div className="flex gap-5">
        {categories.map((category, index) => (
          <div className="flex items-center gap-1">
            <img key={index} src={category.img} />
            <div key={index}>{category.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default NavBar;
