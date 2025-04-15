import { moduleRegistry } from "../core/registry";
import { HelloModule } from "./HelloModule";

moduleRegistry.register({
  name: "hello",
  component: HelloModule,
});
