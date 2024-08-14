function Footer() {
  return (
    <>
      <div
        className="w-full md:h-[992px] bg-no-repeat xl1440:bg-contain"
        style={{ backgroundImage: "url('/images/Footer-bg.png')" }}
      >
        <div className="flex md:flex-row flex-col items-center ">
          {/* fisrt column */}
          <div className="  md:mt-[385px] md:ml-[170px] mt-[300px] md:mb-[343px] text-white">
            <div className="flex-col gap-[12px]">
              <h3 className="font-[700] text-[32px] leading-[33.6px]">
                AFFIXOS
              </h3>
              <p className="w-[301px] h-[66px] font-[400] text-[16px] leading-[22.4px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis consectetur atque debitis placeat eos aperiam!
              </p>
            </div>
            {/* icons div */}
            <div className="flex gap-[16px] mt-[32px]">
              <img
                src="images/world-icon.png"
                alt=""
                className="w-[48px] h-[48px]"
              />
              <img
                src="images/facebook.png"
                alt=""
                className="w-[48px] h-[48px]"
              />
              <img
                src="images/twitter.png"
                alt=""
                className="w-[48px] h-[48px]"
              />
              <img
                src="images/google.png"
                alt=""
                className="w-[48px] h-[48px]"
              />
              <img
                src="images/linkedin.png"
                alt=""
                className="w-[48px] h-[48px]"
              />
            </div>
          </div>

          {/* second column */}
          <div className="text-white md:ml-[142px] md:mt-[203px] mt-[100px] md:mb-[161px]">
            <p className="font-[700] text-[18px] leading-[24.3px] mb-[16px]">
              Pages
            </p>
            <ul className="flex flex-col gap-[10px]">
              <li>Home V1</li>
              <li>Home V2</li>
              <li>Home V3</li>
            </ul>
          </div>

          {/* third column */}
          <div className="md:ml-[142px] md:mt-[297px] md:mb-[431px] text-white">
            <ul className="flex flex-col gap-[10px]">
              <li>Help Center 2</li>
              <li>FAQ 1</li>
              <li>FAQ 2</li>
            </ul>
          </div>

          {/* fourth column */}
          <div className="md:ml-[176px]  text-white  md:mt-[210px] md:mr-[134px] md:mb-[389px]">
            <p className="font-[700] text-[18px] leading-[24.3px] mb-[16px]">
              Utility Pages
            </p>
            <ul className="flex flex-col gap-[10px] font-[400] text-[16px] leading-[20px]">
              <li>Sign In</li>
              <li>Sign Up</li>
              <li>Forget Password</li>
            </ul>
          </div>
        </div>

        {/* copyright */}
        <div className=" md:ml-[168px] mb-[48px] md:mr-[168px] mt-[-80px]">
          <div className="text-center text-white border-t-[1px] border-white border-opacity-[30%]">
            <p className="  mt-[24px]">
              Copyright Stairs | Designed by HafizAhmar
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
