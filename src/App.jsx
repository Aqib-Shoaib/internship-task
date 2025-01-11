import Appbar from "./layout/Appbar";
import Main from "./layout/Main";
import Sidebar from "./layout/Sidebar";

function App() {
  return (
    <div className='grid grid-cols-[15rem,1fr]'>
      <Sidebar />
      <div>
        <Appbar />
        <Main />
      </div>
    </div>
  );
}

export default App;
