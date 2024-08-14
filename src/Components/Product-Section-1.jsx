function ProductFirstSection() {
  return (
    <>
      <div className="flex gap-[100px] h-max-[519px] items-center">
        {/* hours */}
        <div className="ml-[55px]">
          <img src="images/Chart.png" alt="" className="h-[519px]" />
        </div>
        {/* descuption */}
        <div className="h-max-[294px] lg:w-[510px] flex flex-col gap-[20px]">
          <h2 className="text-[#14358A] font-[600] text-[22px] leading-[25px]">
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
      </div>
    </>
  );
}

export default ProductFirstSection;
