// src/components/Sidebar.tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DynamicModules } from "./modules/DynamicModules";
import { ManualModules } from "./modules/ManualModules";

interface SidebarProps {
  onShortcodeChange: (shortcode: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onShortcodeChange }) => {
  return (
    <div className="w-72 h-screen bg-gray-100 p-4 border-r">
      <Tabs defaultValue="manual" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="manual">Manual</TabsTrigger>
          <TabsTrigger value="dynamic">Dynamic</TabsTrigger>
        </TabsList>

        <TabsContent value="manual">
          <ManualModules onShortcodeChange={onShortcodeChange} />
        </TabsContent>

        <TabsContent value="dynamic">
          <DynamicModules onShortcodeChange={onShortcodeChange} />
        </TabsContent>
      </Tabs>
    </div>
  );
};
