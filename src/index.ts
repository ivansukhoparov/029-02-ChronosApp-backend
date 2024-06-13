import {App,} from "./app/app";
import {compositionRootInit, container, providers} from "./app/composition.root";

const port = 5000;

compositionRootInit(providers)
const app:App = container.resolve<App>(App)
app.start(port)

