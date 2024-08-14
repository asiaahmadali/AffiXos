import { FaChevronDown } from "react-icons/fa";
function NavBar() {
  return (
    <>
      <div className="flex text-white justify-between h-[86px] items-center">
        <div className="mt-[25px] mb-[27px] ml-[170px] h-[34px] text-[32px] font-[600] font-sans">
          AFFIXOS
        </div>
        <div className="mt-[32px] mb-[32px]">
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

        <div className="mt-[21px] mb-[21px] mr-[98px] flex gap-[16px]">
          <button className="mt-[11px] mb-[11px]">Contact Us</button>
          <button className="pt-[12px] pb-[12px] pl-[24px] pr-[24px] border-[1px] rounded-[10px] border-white">
            Book a Demo
          </button>
        </div>
      </div>
    </>
  );
}

export default NavBar;
