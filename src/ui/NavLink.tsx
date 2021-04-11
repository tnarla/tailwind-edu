interface Props {
  icon: React.ComponentType<React.ComponentProps<"svg">>;
  label: string;
}

export function NavLink({ icon: Icon, label }: Props) {
  return (
    <button className="space-x-3 flex items-center justify-center md:justify-start rounded-full py-3 px-6 font-bold text-xl transition hover:bg-blue-500 hover:bg-opacity-10 hover:text-blue-400">
      <Icon className="h-6 w-6 m-1" />
      <div className="hidden lg:block">{label}</div>
    </button>
  );
}
