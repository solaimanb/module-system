import { moduleParser } from "./core/parser";
import { moduleRegistry } from "./core/registry";
import { ModuleRenderer } from "./core/renderer";
import "./examples";

export const moduleSystem = new ModuleRenderer(moduleRegistry, moduleParser);
