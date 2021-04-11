import { SearchIcon } from "@heroicons/react/solid";

export function SearchInput() {
  return (
    <div className="rounded-full bg-gray-200 dark:bg-gray-800 w-full flex items-center border border-transparent transition focus-within:border-blue-400 focus-within:text-blue-400 text-gray-500">
      <SearchIcon className="w-6 h-6 ml-4" />
      <input
        className="bg-transparent w-full focus:outline-none px-4 py-2 text-gray-900 dark:text-gray-100"
        placeholder="Search Twitter"
      />
    </div>
  );
}
