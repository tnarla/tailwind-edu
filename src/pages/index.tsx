import {
  HomeIcon,
  ChatAltIcon,
  BellIcon,
  HashtagIcon,
} from "@heroicons/react/outline";
import { Card } from "~/ui/Card";
import { NavLink } from "~/ui/NavLink";
import { SearchInput } from "~/ui/SearchInput";

function Tweets() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-800">
      {Array.from({ length: 50 }, (_, i) => (
        <Card key={i} />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex md:flex-row flex-col-reverse min-h-screen max-w-7xl mx-auto">
      <div className="bg-gray-200 dark:bg-gray-800 md:bg-transparent w-auto lg:w-1/4 py-2 px-4 sticky bottom-0 md:top-0 h-full">
        <div className="grid grid-cols-4 md:flex md:flex-col space-y-2">
          <NavLink icon={HomeIcon} label="Home" />
          <NavLink icon={HashtagIcon} label="Explore" />
          <NavLink icon={BellIcon} label="Notifications" />
          <NavLink icon={ChatAltIcon} label="Messages" />
        </div>
      </div>
      <div className="flex-1">
        <div className="text-xl font-bold sticky top-0 p-4 bg-gray-100 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-800">
          Home
        </div>
        <Tweets />
      </div>
      <div className="hidden md:block w-1/4 sticky top-0 h-full py-2 px-4">
        <SearchInput />
      </div>
    </div>
  );
}
