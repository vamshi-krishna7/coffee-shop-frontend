const MenuItem = ({ onClick, label, value }) => {
  return (
    <div
      onClick={() => onClick(value)}
      className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
    >
      {label}
    </div>
  );
};

export default MenuItem;
