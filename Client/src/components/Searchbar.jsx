import { BiSearch } from "react-icons/Bi";
import "../CSS/component.css";

function Searchbar() {
  return (
    <div className="flex flex-row border border-gray-300 w-80 rounded-xl bg-gray-50">
      <div className="flex items-center h-9 w-64 pl-4 border-r border-sky-300">
        <input className="bg-gray-50" type="text" placeholder="Search" />
      </div>
      <div className=" flex items-center justify-center text-gray-50 bg-sky-500 border-r rounded-r-xl border-sky-300 w-16 h-9 text-2xl">
        <BiSearch />
      </div>
    </div>
  );
}

export default Searchbar;
