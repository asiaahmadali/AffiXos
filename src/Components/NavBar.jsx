import { FaBars } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
function NavBar() {
  return (
    <>
      <div className="flex text-white justify-between w-full h-auto md:h-[86px] items-center">
        <FaBars className="ml-[10px] font-[18px] md:hidden "></FaBars>
        <div className="mt-[25px] mb-[27px] ml-[170px] h-[34px] text-[22px] font-[400] md:text-[32px] md:font-[700] font-sans">
          AFFIXOS
        </div>
        <div className="mt-[32px] mb-[32px] hidden md:block">
          <nav>
            <ul className="flex gap-[40px] text-[16px]">
              <li>Home</li>
              <li>Solution</li>
              <li>Product</li>
              <li>Industries</li>
              <div className="flex items-center gap-[8px]">
                <li>Company</li>
                <FaChevronDown></FaChevronDown>
              </div>
            </ul>
          </nav>
        </div>

        <div className="mt-[21px] mb-[21px] mr-[98px] flex gap-[10px] md:gap-[16px]">
          <button className="md:mt-[11px] md:mb-[11px] mt-[6px] md-[6px]">
            Contact Us
          </button>
          <button className="md:pt-[12px] md:pb-[12px] md:pl-[24px] md:pr-[24px] border-[1px] md:rounded-[10px] rounded-[6px] p-[10px] border-white">
            Book a Demo
          </button>
        </div>
      </div>
    </>
  );
}

export default NavBar;
