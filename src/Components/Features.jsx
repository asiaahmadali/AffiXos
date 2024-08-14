import { FaArrowRight } from "react-icons/fa";
function Features() {
  return (
    <>
      <div className="mt-[70px] ml-[119px] mr-[120px]">
        <div className="ml-[223px] mr-[223px]">
          <h2 className="text-[48px] leading-[50.4px] text-center font-[600] text-[#14358A] ">
            Key Features.
          </h2>
          <p className="text-[16px] text-center text-[#68718B] font-[400] leading-[22.4px] mt-[18px] ml-[126px] mr-[126px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            ratione, quasi adipisci
          </p>
        </div>

        {/* features card */}
        <div className="mt-[57px] grid grid-cols-3 gap-[13px]">
          <div className="flex flex-col items-center justify-center w-[388px] h-[280px] p-[18px] gap-[5.7px]">
            <img src="images/Icon-6.png" alt="" />
            <p className="text-[#14358A] font-[700]">Customizable Layout</p>
            <p className="text-center text-[#68718B]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              facere inventore eius.
            </p>
            <div className="text-[#14358A] border-b-[1px] border-[#14358A] flex items-center justify-center gap-[4px]">
              <a href="#">Learn More</a>
              <FaArrowRight></FaArrowRight>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-[388px] h-[280px] p-[18px] gap-[5.7px]">
            <img src="images/Icon-1.png" alt="" />
            <p className="text-[#14358A] font-[700]">Data Visualization</p>
            <p className="text-center text-[#68718B]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              facere inventore eius.
            </p>
            <div className="text-[#14358A] border-b-[1px] border-[#14358A] flex items-center justify-center gap-[4px]">
              <a href="#">Learn More</a>
              <FaArrowRight></FaArrowRight>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-[388px] h-[280px] p-[18px] gap-[5.7px] shadow-md shadow-gray-300">
            <img src="images/Icon-2.png" alt="" />
            <p className="text-[#14358A] font-[700]">Real-Time Updates</p>
            <p className="text-center text-[#68718B]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              facere inventore eius.
            </p>
            <div className="text-[#14358A] border-b-[1px] border-[#14358A] flex items-center justify-center gap-[4px]">
              <a href="#">Learn More</a>
              <FaArrowRight></FaArrowRight>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-[388px] h-[280px] p-[18px] gap-[5.7px]">
            <img src="images/Icon-3.png" alt="" />
            <p className="text-[#14358A] font-[700]">User Access Control</p>
            <p className="text-center text-[#68718B]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              facere inventore eius.
            </p>
            <div className="text-[#14358A] border-b-[1px] border-[#14358A] flex items-center justify-center gap-[4px]">
              <a href="#">Learn More</a>
              <FaArrowRight></FaArrowRight>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-[388px] h-[280px] p-[18px] gap-[5.7px]">
            <img src="images/Icon-5.png" alt="" />
            <p className="text-[#14358A] font-[700]">Interactive Elements</p>
            <p className="text-center text-[#68718B]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              facere inventore eius.
            </p>
            <div className="text-[#14358A] border-b-[1px] border-[#14358A] flex items-center justify-center gap-[4px]">
              <a href="#">Learn More</a>
              <FaArrowRight></FaArrowRight>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-[388px] h-[280px] p-[18px] gap-[5.7px]">
            <img src="images/Icon-4.png" alt="" />
            <p className="text-[#14358A] font-[700]">Reports and Analytics</p>
            <p className="text-center text-[#68718B]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              facere inventore eius.
            </p>
            <div className="text-[#14358A] border-b-[1px] border-[#14358A] flex items-center justify-center gap-[4px]">
              <a href="#">Learn More</a>
              <FaArrowRight></FaArrowRight>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
