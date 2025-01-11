import DailyUpdate from "../components/DailyUpdate";
import Searchbar from "../components/Searchbar";

function Appbar() {
  return (
    <div className='flex justify-between p-4'>
      {/* greetings */}
      <div className='flex text-primary text-xl gap-1'>
        <h2 className='font-bold'>Good Morning,</h2>
        <p>Aqib</p>
      </div>

      <div className='flex gap-2 items-center'>
        <DailyUpdate />
        <Searchbar />

        {/* notification icon div */}
        <div className='p-2 rounded-full shadow-md mx-2'>
          <img src='appbar/notification.png' alt='notification icon' />
        </div>

        {/* avatar box */}
        <div>
          <img src='Avatar-1.png' alt='avatar image' />
        </div>
      </div>
    </div>
  );
}

export default Appbar;
