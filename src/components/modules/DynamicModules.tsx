import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MODULE_CONFIGS } from "@/lib/modules/config";
import { useState } from "react";

interface DynamicModulesProps {
  onShortcodeChange: (shortcode: string) => void;
}

export const DynamicModules: React.FC<DynamicModulesProps> = ({
  onShortcodeChange,
}) => {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [formValues, setFormValues] = useState<Record<string, string>>({});

  const handleModuleSelect = (moduleName: string) => {
    setSelectedModule(moduleName);
    const defaults = Object.entries(MODULE_CONFIGS[moduleName].fields).reduce(
      (acc, [key, field]) => ({ ...acc, [key]: field.default }),
      {} as Record<string, string>
    );
    setFormValues(defaults);
    generateShortcode(moduleName, defaults);
  };

  const handleFieldChange = (field: string, value: string) => {
    const newValues = { ...formValues, [field]: value };
    setFormValues(newValues);
    if (selectedModule) {
      generateShortcode(selectedModule, newValues);
    }
  };

  const generateShortcode = (
    moduleName: string,
    values: Record<string, string>
  ) => {
    const attrs = Object.entries(values)
      .map(([key, value]) => `${key}="${value}"`)
      .join(" ");
    const shortcode = `[module name="${moduleName}" ${attrs}]`;
    onShortcodeChange(shortcode);
  };

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold mb-3">Select Module</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full">
              {selectedModule
                ? MODULE_CONFIGS[selectedModule].name
                : "Select Module"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Available Modules</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {Object.keys(MODULE_CONFIGS).map((name) => (
              <DropdownMenuItem
                key={name}
                onClick={() => handleModuleSelect(name)}
              >
                <div className="flex flex-col">
                  <span className="font-medium capitalize">{name}</span>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {selectedModule && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Configure Module</h2>
          {Object.entries(MODULE_CONFIGS[selectedModule].fields).map(
            ([fieldName, field]) => (
              <div key={fieldName} className="space-y-2">
                <label className="text-sm font-medium">{field.label}</label>
                {field.type === "select" ? (
                  <select
                    className="w-full p-2 border rounded"
                    value={formValues[fieldName] || field.default}
                    onChange={(e) =>
                      handleFieldChange(fieldName, e.target.value)
                    }
                  >
                    {field.options?.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    value={formValues[fieldName] || field.default}
                    onChange={(e) =>
                      handleFieldChange(fieldName, e.target.value)
                    }
                  />
                )}
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};
