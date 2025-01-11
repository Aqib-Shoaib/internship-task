import Nav from "../components/Nav";
import SubNav from "../components/SubNav";

function Sidebar() {
  return (
    <div className='h-full p-2 border-r-[1px] border-gray-100'>
      {/* logo */}
      <div>
        <img src='/logo.png' alt='company logo' />
      </div>

      {/* ...rest */}
      <div className='flex h-full mt-3 '>
        <Nav />
        <SubNav />
      </div>
    </div>
  );
}

export default Sidebar;
