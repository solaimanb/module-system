import { moduleRegistry } from "../core/registry";
import { AlertModule } from "./AlertModule";
import { ButtonModule } from "./ButtonModule";
import { WelcomeModule } from "./WelcomeModule";

moduleRegistry.register({
  name: "welcome",
  component: WelcomeModule,
});

moduleRegistry.register({
  name: "alert",
  component: AlertModule,
});

moduleRegistry.register({
  name: "button",
  component: ButtonModule,
});
