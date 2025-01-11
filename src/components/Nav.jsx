function Nav() {
  const navIcons = [
    "/Pages.png",
    "/Pages-1.png",
    "/Pages-2.png",
    "/Pages-3.png",
    "/Pages-4.png",
    "/Pages-5.png",
    "/Pages-6.png",
    "/Pages-7.png",
  ];
  return (
    <div className='flex flex-col justify-between border-r-[1px] border-gray-100 p-1'>
      {/* icons nav */}
      <nav className='flex flex-col gap-1 items-center'>
        {navIcons.map((icon, index) => (
          <img
            key={index}
            src={`nav-icons${icon}`}
            alt='icon'
            className='p-2 rounded-md cursor-pointer hover:bg-gray-300 transition-all'
            style={{
              backgroundColor: index === navIcons.length - 1 ? "#ccc" : "",
            }}
          />
        ))}
      </nav>

      <div>
        <img src='Avatar-1.png' alt='avatar of logged in person' />
      </div>
    </div>
  );
}

export default Nav;
