function SubNav() {
  const subNav = [
    {
      text: "profile",
      active: false,
    },
    {
      text: "staff",
      active: true,
    },
    {
      text: "clinics",
      active: false,
    },
    {
      text: "job settings",
      active: false,
    },
    {
      text: "lookup values",
      active: false,
    },
  ];
  return (
    <div className='flex flex-col justify-between p-2'>
      <div>
        <h2 className='font-medium capitalize text-base text-sub-heading'>
          Settings
        </h2>
        <nav className='flex flex-col gap-1 items-start p-3'>
          {subNav.map((el, ind) => (
            <button
              key={ind}
              className={`capitalize font-medium text-sm leading-7 hover:text-sub-nav-active text-left ${
                el.active ? "text-sub-nav-active" : "text-sub-nav"
              } transition-all p-1 rounded-sm`}
            >
              {el.text}
            </button>
          ))}
        </nav>
      </div>

      <div>
        {/* name and email of logged in person */}
        <p className='text-primary font-semibold text-sm'>Aqib</p>
        <p className='text-tertiary text-sm'>aqibibnamjid@gmail.com</p>
      </div>
    </div>
  );
}

export default SubNav;
