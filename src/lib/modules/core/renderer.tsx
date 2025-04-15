import React from "react";
import { ModuleParser } from "./parser";
import { ModuleRegistry } from "./registry";

export class ModuleRenderer {
  constructor(private registry: ModuleRegistry, private parser: ModuleParser) {}

  render(content: string): React.ReactNode {
    const modules = this.parser.parse(content);
    if (modules.length === 0) return content;

    const result: (string | React.ReactNode)[] = [content];

    modules.forEach((module, index) => {
      const definition = this.registry.get(module.name);
      if (definition) {
        const Component = definition.component;
        const rendered = (
          <Component key={`module-${index}`} {...module.attributes} />
        );

        const lastPart = result.pop() as string;
        const [before, after] = lastPart.split(module.fullMatch);
        result.push(before, rendered, after);
      }
    });

    return <>{result}</>;
  }
}
