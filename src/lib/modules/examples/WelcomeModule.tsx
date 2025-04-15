import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const WelcomeModule: React.FC<{ name?: string }> = ({
  name = "World",
}) => {
  return (
    <Card className="max-w-md text-center shadow-lg w-full">
      <CardHeader>
        <CardTitle className="text-4xl font-bold">Welcome!</CardTitle>
      </CardHeader>
      <CardContent>
        <h2 className="text-2xl font-bold">Hello, {name}!</h2>
      </CardContent>
    </Card>
  );
};
