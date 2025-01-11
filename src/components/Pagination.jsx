function Pagination() {
  return (
    <div className='flex justify-between items-center m-5'>
      <div className='text-sm text-[#344054] font-inter font-medium leading-5 text-left capitalize'>
        <span>page 1 of 10</span>
      </div>

      <div className='text-primary flex gap-5'>
        <button className='rounded-md border border-1 border-gray-300 capitalize p-1'>
          Previous
        </button>
        <button className='rounded-md border border-1 border-gray-300 capitalize p-1'>
          next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
