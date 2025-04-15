interface ButtonProps {
  label?: string;
  variant?: "primary" | "secondary" | "outline";
}

export const ButtonModule: React.FC<ButtonProps> = ({
  label = "Click me",
  variant = "primary",
}) => {
  const style = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    outline: "border-2 border-blue-500 text-blue-500 hover:bg-blue-50",
  }[variant];

  return <button className={`px-4 py-2 rounded-md ${style}`}>{label}</button>;
};
