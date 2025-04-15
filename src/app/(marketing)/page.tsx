import { moduleSystem } from "@/lib/modules";

export default function Homepage() {
  const content = `
       Welcome to our site!
       [module name="hello" name="solo"]
     `;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-black my-6">MODULE SYSTEM</h1>

      <div>{moduleSystem.render(content)}</div>
    </div>
  );
}
