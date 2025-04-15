import { ComponentType } from "react";

export interface ModuleAttributes {
  [key: string]: string | number | boolean | undefined;
}

export interface ModuleDefinition {
  name: string;
  component: ComponentType<ModuleAttributes>;
  attributes?: ModuleAttributes;
}

export interface ParsedModule {
  name: string;
  attributes: Record<string, string>;
  content?: string;
  fullMatch: string;
}
