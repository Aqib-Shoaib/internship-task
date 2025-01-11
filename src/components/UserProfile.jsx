/* eslint-disable react/prop-types */
function UserProfile({ user }) {
  return (
    <div className='flex item-center gap-2 col-span-6'>
      <img src={user.avatar} alt='user avatar' />
      <div>
        <p className='font-inter font-medium text-sm text-primary'>
          {user.name}
        </p>
        <p className='text-sm font-inter text-tertiary'>{user.email}</p>
      </div>
    </div>
  );
}

export default UserProfile;