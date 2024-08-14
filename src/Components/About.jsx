function About() {
  return (
    <>
      <div className="mt-[109px] md:ml-[120px] md:mr-[120px]">
        <div className="h-max-[135px] flex flex-col gap-[15px]">
          <h1 className="text-[#14358A] font-[600] text-[48px] leading-[50px] text-center">
            About Our App
          </h1>
          <p className="text-center ml-[268px] mr-[268px] leading-[22.4px] text-[#68718B] font-[400] text-[16px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            vitae voluptatem commodi dolorem a ducimus. Officia provident
            tempore perspiciatis cumque ullam obcaecati atque praesentium
            ducimus nisi. Ullam quisquam voluptatibus maiores.
          </p>
        </div>

        {/* flex div */}
        <div className="flex sm:flex-col md:flex-row mt-[40px] gap-[118px]">
          <div className="mt-[77px] mb-[77px]">
            <img src="images/chart-2.png" alt="" />
          </div>
          <div className="flex flex-col gap-[20px] h-max-[529px] md:w-[572px] ">
            <div className="flex gap-[10px] pt-[28px]  pl-[33px] pr-[33px] pb-[28px]  bg-white rounded-[14px] shadow-md shadow-gray-300">
              <div className="w-[100px] h-[100px]">
                <img src="images/circle-fill.png" alt="" className="" />
              </div>
              <div className="flex flex-col gap-[15px]">
                <h2 className="text-[#14358A] text-[24px] leading-[25px] font-[600]">
                  Creative Design
                </h2>
                <p className="text-[#68718B] text-[14px] font-[400] leading-[22px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident voluptates doloremque rerum quisquam rem consectetur
                  ipsum totam, eaque maxime distinctio beatae
                </p>
              </div>
            </div>

            <div className="flex gap-[10px] pt-[28px]  pl-[33px] pr-[33px] pb-[28px]  bg-white rounded-[14px] shadow-md shadow-gray-300">
              <div className="w-[100px] h-[100px]">
                <img src="images/circle-fill.png" alt="" className="" />
              </div>
              <div className="flex flex-col gap-[15px]">
                <h2 className="text-[#14358A] text-[24px] leading-[25px] font-[600]">
                  easy to use
                </h2>
                <p className="text-[#68718B] text-[14px] font-[400] leading-[22px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident voluptates doloremque rerum quisquam rem consectetur
                  ipsum totam, eaque maxime distinctio beatae
                </p>
              </div>
            </div>

            <div className="flex gap-[10px] pt-[28px]  pl-[33px] pr-[33px] pb-[28px]  bg-white rounded-[14px] shadow-md shadow-gray-300">
              <div className="w-[100px] h-[100px]">
                <img src="images/circle-fill.png" alt="" className="" />
              </div>
              <div className="flex flex-col gap-[15px]">
                <h2 className="text-[#14358A] text-[24px] leading-[25px] font-[600]">
                  Best user experience
                </h2>
                <p className="text-[#68718B] text-[14px] font-[400] leading-[22px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident voluptates doloremque rerum quisquam rem consectetur
                  ipsum totam, eaque maxime distinctio beatae
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
