function ProductSecondSection() {
  return (
    <>
      <div className="flex sm:gap-[20px] flex-col md:flex-row md:gap-[100px] md:h-max-[494px] w-full items-center">
        {/* descuption */}
        <div className="h-max-[294px] lg:w-[510px] flex  flex-col gap-[20px] ml-[99px]">
          <h2 className="text-[#14358A] font-[700] text-[24px] leading-[25px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className="text-[#68718B] font-[400] text-[16px] leading-[22px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            illum repellendus aliquid eveniet fugiat magni! Blanditiis obcaecati
            enim amet ullam.
          </p>
          <div className="flex gap-[16px] items-center">
            <img src="images/CheckCircle.png" alt="check" />
            <p className="text-[#14358A]">User Experience Design Team</p>
          </div>
          <div className="flex gap-[16px] items-center">
            <img src="images/CheckCircle.png" alt="check" />
            <p className="text-[#14358A]">User Experience Design Team</p>
          </div>
          <div className="flex gap-[16px] items-center">
            <img src="images/CheckCircle.png" alt="check" />
            <p className="text-[#14358A]">User Experience Design Team</p>
          </div>
        </div>

        <div className="max-h-[494px]">
          <img src="images/p-section2.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default ProductSecondSection;
