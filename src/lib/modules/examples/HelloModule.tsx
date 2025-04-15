export const HelloModule: React.FC<{ name?: string }> = ({
  name = "World",
}) => {
  return (
    <div className="p-4 bg-blue-100 rounded-lg">
      <h2>Hello, {name}!</h2>
    </div>
  );
};
