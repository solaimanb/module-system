interface ManualModulesProps {
  onShortcodeChange: (shortcode: string) => void;
}

const MODULE_EXAMPLES = {
  welcome: '[module name="welcome" name="Vladimir"]',
  alert: '[module name="alert" type="success" message="Hello"]',
  button: '[module name="button" label="Click" variant="primary"]',
};

export const ManualModules: React.FC<ManualModulesProps> = ({
  onShortcodeChange,
}) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Available Modules</h2>
        <div className="space-y-2">
          {Object.entries(MODULE_EXAMPLES).map(([name, shortcode]) => (
            <div
              key={name}
              className="p-2 bg-white rounded cursor-pointer hover:bg-gray-50"
              onClick={() => onShortcodeChange(shortcode)}
            >
              <div className="font-medium capitalize">{name}</div>
              <div className="text-sm text-gray-500">{shortcode}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Create Shortcode</h2>
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder='[module name="hello" name="John"]'
          onChange={(e) => onShortcodeChange(e.target.value)}
        />
      </div>
    </div>
  );
};
