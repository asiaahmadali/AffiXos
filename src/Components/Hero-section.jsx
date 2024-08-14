function Hero() {
  return (
    <>
      <div className="ml-[210px] mr-[212px] text-white max-h-[1162px]">
        {/* intro */}
        <div className="mt-[80px] ml-[100px] mr-[100px]">
          <h1 className="text-[50px] font-[600] text-center leading-[66px]">
            AFFIXOS Real Time Location Tracking System
          </h1>
          <p className="mt-[24px] ml-[132px] mr-[132px] text-center font-[400] text-[18px] leading-[24.3px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
            error dicta aliquid eveniet{" "}
            <span className="font-[700]">AFFIXOS</span> debitis! Impedit facere
            non, asperiores
          </p>

          {/* buttons */}
          <div className="mt-[48px] ml-[208px] mr-[208px] flex gap-[16px]">
            <button className="rounded-[10px] h-[64px] pt-[20px] pr-[40px] pb-[20px] pl-[40px] bg-gradient-to-r from-[#06268D] to-[#30D3AC]">
              Contact
            </button>
            <button className=" border-[1px] border-white rounded-[10px] h-[64px] pt-[20px] pr-[40px] pb-[20px] pl-[40px]">
              Learn More
            </button>
          </div>
        </div>

        {/* dashboard */}
        <div className="">
          <img
            src="images/Dashboard.png"
            alt="dashboard"
            className="h-[614px] w-full"
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
