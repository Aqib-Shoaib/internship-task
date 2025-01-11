function DailyUpdate() {
  return (
    <>
      <div className='flex flex-col'>
        <p className='font-semibold text-base text-right text-primary uppercase'>
          01:06 pm
        </p>
        <span className='font-medium text-right text-[10px] text-tertiary'>
          Sat,11 Jan
        </span>
      </div>
      <div>|</div>
      <div className='flex gap-1'>
        <div className='flex flex-col'>
          <p className='font-bold text-base text-primary'>12</p>
          <span className='font-medium text-[10px] text-tertiary'>
            &deg;C&deg;F
          </span>
        </div>
        <div className='relative'>
          <img
            className='relative left-[-1]'
            src='appbar/wb_sunny.png'
            alt='sun image icon'
          />
          <img
            className='absolute bottom-1 left-3'
            src='appbar/wb_cloudy.png'
            alt='cloud image icon'
          />
        </div>
      </div>
    </>
  );
}

export default DailyUpdate;
