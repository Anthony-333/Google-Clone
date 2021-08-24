import Avatar from "./Avatar";
import { ViewGridIcon } from "@heroicons/react/solid"

function Header() {
  return (
    <header className="flex w-full p-5 justify-between text-md text-gray-700">
      {/* Left Div */}
      <div className="flex space-x-4 items-center">
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>

      {/* Right Div */}
      <div className="flex space-x-4 items-center">
        <p className="link">Gmail</p>
        <p className="link">Images</p>

        {/* Icon */}
        <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

        {/* Avatar */}
        <Avatar url="https://www.pngkey.com/png/full/114-1149847_avatar-unknown-dp.png" />
      </div>
    </header>
  );
}

export default Header;
