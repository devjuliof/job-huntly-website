interface ButtonToggleProps {
  isActive: boolean;
  label: string;
  onClick: () => void;
}

export default function ButtonToggle({
  isActive,
  label,
  onClick,
}: ButtonToggleProps) {
  return (
    <button onClick={() => onClick()}>
      <p
        className={`text-indigo-700  font-semibold p-3 ${
          isActive && "bg-indigo-200"
        }`}
      >
        {label}
      </p>
    </button>
  );
}
