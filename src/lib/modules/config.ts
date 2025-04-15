export interface FieldConfig {
  type: "text" | "select";
  label: string;
  default: string;
  options?: string[];
}

export interface ModuleConfig {
  name: string;
  fields: {
    [key: string]: FieldConfig;
  };
}

export type ModuleConfigs = {
  [key: string]: ModuleConfig;
};

export const MODULE_CONFIGS: ModuleConfigs = {
  welcome: {
    name: "welcome",
    fields: {
      name: {
        type: "text",
        label: "Name",
        default: "Vladimir",
      },
    },
  },
  alert: {
    name: "alert",
    fields: {
      type: {
        type: "select",
        label: "Type",
        options: ["success", "error", "warning", "info"],
        default: "success",
      },
      message: {
        type: "text",
        label: "Message",
        default: "Hello",
      },
    },
  },
  button: {
    name: "button",
    fields: {
      label: {
        type: "text",
        label: "Label",
        default: "Click",
      },
      variant: {
        type: "select",
        label: "Variant",
        options: ["primary", "secondary", "outline"],
        default: "primary",
      },
    },
  },
};
