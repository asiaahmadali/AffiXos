function Contact() {
  return (
    <>
      <div className="bg-[#EBF7FF] w-full md:h-max-[721px] mt-[103px]">
        <div className="mt-[67px] mr-[61.8px] mb-[67.5px] ml-[61.8px] rounded-[22.5px] p-[67.5px] md:h-max-[586px] bg-[#1D2C97]">
          {/* heading */}
          <div className="text-white mb-[67px]">
            <h2 className="mb-[11px] font-[600] text-[48px] leading-[50px]">
              Lets get in touch!
            </h2>
            <p className="leading-[28.8px] text-[16px] font-[400] h-[87px] w-[431px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
              molestias vel magni, ipsam magnam laboriosam ipsam magnam
              laboriosam.
            </p>
          </div>
          {/* flex-box  */}

          <div className="flex gap-[45px] text-white">
            <div className="h-max-[235px] lg:w-[523px] flex flex-col gap-[69px]">
              <div className="flex flex-col gap-[22px]">
                <div className="flex gap-[13px]">
                  <img src="images/PhoneCall.png" alt="" />
                  <p>+0123456789</p>
                </div>
                <div className="flex gap-[13px]">
                  <img src="images/mail.png" alt="" />
                  <p>Hello@animaapp.com</p>
                </div>
              </div>
              <div className="flex flex-col gap-[22px]">
                <div className="flex gap-[13px]">
                  <h2 className="font-[600] leading-[30px] text-[23px]">
                    Connect with us
                  </h2>
                </div>
                <div className="flex gap-[12px]">
                  <img src="images/Social-icon-1.png" alt="" />
                  <img src="images/Social-icon-2.png" alt="" />
                  <img src="images/Social-icon-3.png" alt="" />
                  <img src="images/Social-icon-4.png" alt="" />
                </div>
              </div>
            </div>

            {/* user name and email */}
            <div className="h-max-[235px] lg:w-[523px] flex flex-col gap-[11px]">
              <div className="flex gap-[4px] h-[67.5px] rounded-[12px] border-[1.13px] border-white items-center pt-[9px] pb-[9px] pr-[22.5px] pl-[22.5px]">
                <img
                  src="images/user.png"
                  alt=""
                  className="w-[22px] h-[22px]"
                />
                <input
                  type="text"
                  placeholder="Full name"
                  className="outline-none border-none text-white bg-transparent font-[400] leading-[27px] text-[18px]"
                />
              </div>

              {/* email */}
              <div className="flex gap-[4px] h-[67.5px] rounded-[12px] border-[1.13px] border-white items-center pt-[9px] pb-[9px] pr-[22.5px] pl-[22.5px]">
                <img
                  src="images/gmail.png"
                  alt=""
                  className="w-[22px] h-[22px]"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="outline-none border-none text-white bg-transparent font-[400] leading-[27px] text-[18px]"
                />
              </div>
              {/* submit button */}
              <button className="bg-gradient-to-r from-[#06268D] to-[#30D3AC] rounded-[10px] pt-[20px] pb-[20px] pr-[40px] pl-[40px] mt-[18px] w-[146px] h-max-[67px] font-[600] text-[16px] leading-[27px] text-center">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
