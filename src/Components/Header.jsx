import NavBar from "./NavBar";
import Hero from "./Hero-section";
function Header() {
  return (
    <>
      <div className="bg-[url('images/Background.png')] bg-no-repeat w-full">
        <NavBar></NavBar>
        <Hero></Hero>
      </div>
    </>
  );
}

export default Header;
