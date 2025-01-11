/* eslint-disable react/prop-types */
function Dropdown({ setActive }) {
  const classNames =
    "p-2 text-sm font-medium text-[#344054] cursor-pointer hover:bg-gray-100 hover:text-primary rounded-md transition-colors";

  function closeDropdown() {
    setActive(false); // Close the dropdown when an item is clicked
  }

  return (
    <ul className='flex flex-col bg-white absolute mt-2 right-0 w-48 shadow-lg rounded-lg border border-gray-200 z-10'>
      <li className={classNames} onClick={closeDropdown}>
        Assign Job
      </li>
      <li className={classNames} onClick={closeDropdown}>
        Send Invite
      </li>
      <li className={classNames} onClick={closeDropdown}>
        Message
      </li>
    </ul>
  );
}

export default Dropdown;
