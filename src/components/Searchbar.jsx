function Searchbar() {
  return (
    <div className='flex gap-2 bg-gray-300 rounded-full items-center p-2 mx-2'>
      <img src='appbar/search1.png' alt='search icon lens' />
      <input
        className='bg-transparent capitalize outline-none'
        type='text'
        placeholder='search'
      />
      <img
        className='bg-gray-400 rounded-xl p-1'
        src='appbar/Shortcut.png'
        alt='shortcuts for search icon'
      />
    </div>
  );
}

export default Searchbar;
