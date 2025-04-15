import { ParsedModule } from "../types";

export class ModuleParser {
  private pattern = /\[module\s+name="([^"]+)"(?:\s+([^\]]+))?\]/g;

  parse(content: string): ParsedModule[] {
    const modules: ParsedModule[] = [];
    let match;

    while ((match = this.pattern.exec(content)) !== null) {
      modules.push({
        name: match[1],
        attributes: this.parseAttributes(match[2]),
        fullMatch: match[0],
      });
    }

    return modules;
  }

  private parseAttributes(attrString?: string): Record<string, string> {
    if (!attrString) return {};

    const attributes: Record<string, string> = {};
    const attrPattern = /(\w+)="([^"]+)"/g;
    let attrMatch;

    while ((attrMatch = attrPattern.exec(attrString)) !== null) {
      attributes[attrMatch[1]] = attrMatch[2];
    }

    return attributes;
  }
}

export const moduleParser = new ModuleParser();
