import MenuIcon from "./MenuIcon";
import Userjoining from "./Userjoining";
import UserProfile from "./UserProfile";
import UserStatus from "./UserStatus";
import UserType from "./UserType";

function Listing() {
  const data = [
    {
      id: 1,
      name: "Aqib Shoaib",
      email: "aqibibnamjid@gmail.com",
      avatar: "Avatar-1.png",
      active: true,
      joinedAt: "11 Jan, 2025",
      type: "System Admin",
      borderColor: "#C084FC",
    },
    {
      id: 2,
      name: "Olivia Rhye",
      email: "olivia@gmail.com",
      avatar: "Avatar-2.png",
      active: true,
      joinedAt: "11 Jan, 2025",
      type: "Nurse Practitioner",
      borderColor: "#4ADE80",
    },
    {
      id: 3,
      name: "John Doe",
      email: "doejogn@gmail.com",
      avatar: "Avatar-3.png",
      active: false,
      joinedAt: "11 Jan, 2025",
      type: "GP",
      borderColor: "#FACC15",
    },
    {
      id: 4,
      name: "Zaire Siphrone",
      email: "siphrone@gmail.com",
      avatar: "Avatar-2.png",
      active: true,
      joinedAt: "11 Jan, 2025",
      type: "Practice Manager",
      borderColor: "#ff66ff",
    },
    {
      id: 5,
      name: "Emma Watson",
      email: "emma@gmail.com",
      avatar: "Avatar-2.png",
      active: true,
      joinedAt: "12 Feb, 2025",
      type: "Nurse Practitioner",
      borderColor: "#4ADE80",
    },
    {
      id: 6,
      name: "Liam Neeson",
      email: "liam@gmail.com",
      avatar: "Avatar-3.png",
      active: false,
      joinedAt: "13 Mar, 2025",
      type: "GP",
      borderColor: "#FACC15",
    },
    {
      id: 7,
      name: "Sophia Brown",
      email: "sophia@gmail.com",
      avatar: "Avatar-2.png",
      active: true,
      joinedAt: "14 Apr, 2025",
      type: "Practice Manager",
      borderColor: "#ff66ff",
    },
    {
      id: 8,
      name: "James Smith",
      email: "james@gmail.com",
      avatar: "Avatar-1.png",
      active: true,
      joinedAt: "15 May, 2025",
      type: "System Admin",
      borderColor: "#C084FC",
    },
    {
      id: 9,
      name: "Isabella Johnson",
      email: "isabella@gmail.com",
      avatar: "Avatar-2.png",
      active: false,
      joinedAt: "16 Jun, 2025",
      type: "Nurse Practitioner",
      borderColor: "#4ADE80",
    },
    {
      id: 10,
      name: "Michael Brown",
      email: "michael@gmail.com",
      avatar: "Avatar-3.png",
      active: true,
      joinedAt: "17 Jul, 2025",
      type: "GP",
      borderColor: "#FACC15",
    },
  ];

  return (
    <div className='p-5'>
      <div className='grid grid-cols-12 text-tertiary gap-4'>
        <p className='col-span-6 pl-4'>Users</p>
        <p className='col-span-1'>Status</p>
        <p className='col-span-2'>Joined At</p>
        <p className='col-span-2'>Type</p>
        <p className='col-span-1'></p>
      </div>

      {/* actual listing */}
      <div className=' bg-white '>
        {data.map((user, ind) => (
          <div
            className='grid grid-cols-12 border-[0.5px] border-gray-100 gap-4 items-center p-1 py-2'
            key={ind}
            style={{
              borderLeft: `2px solid ${user.borderColor}`,
            }}
          >
            <UserProfile user={user} />
            <UserStatus user={user} />
            <Userjoining user={user} />
            <UserType user={user} />
            <MenuIcon />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Listing;
