import ProductFirstSection from "./Product-Section-1";
import ProductSecondSection from "./Product-Section-2";
import ProductThirdSection from "./Product-Section-3";

function ProductsFeatures() {
  return (
    <>
      <div className="ml-[120px] mr-[121px] mt-[109px] flex flex-col gap-[40px] items-center">
        <h1 className="text-[#14358A] font-[600] text-[48px] leading-[50px] text-center">
          Our Product features
        </h1>
        <ProductFirstSection></ProductFirstSection>
        <ProductSecondSection></ProductSecondSection>
        <ProductThirdSection></ProductThirdSection>
        <button className="rounded-[10px] bg-gradient-to-r from-[#06268D] to-[#30DEAC] text-white pt-[20px] pr-[40px] pb-[20px] pl-[40px] w-[178px] h-[64px]">
          Learn More
        </button>
      </div>
    </>
  );
}

export default ProductsFeatures;
