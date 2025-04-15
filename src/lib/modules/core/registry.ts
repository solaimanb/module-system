import { ModuleDefinition } from "../types";

export class ModuleRegistry {
  private modules: Map<string, ModuleDefinition> = new Map();

  register(definition: ModuleDefinition): void {
    this.modules.set(definition.name, definition);
  }

  get(name: string): ModuleDefinition | undefined {
    return this.modules.get(name);
  }

  has(name: string): boolean {
    return this.modules.has(name);
  }
}

export const moduleRegistry = new ModuleRegistry();
