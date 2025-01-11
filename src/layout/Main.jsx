import Listing from "../components/Listing";
import MainHeader from "../components/MainHeader";
import Pagination from "../components/Pagination";

function Main() {
  return (
    <div className='bg-gray-100 h-full'>
      <MainHeader />
      <Listing />
      <Pagination />
    </div>
  );
}

export default Main;
