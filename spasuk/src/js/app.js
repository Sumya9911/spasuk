import { applyTheme } from "./fn/theme.js";
import { mountNavbar } from "./components/Navbar.js";
import { mountFooter } from "./components/footer.js";
import { initRouter } from "./router.js";
import { routes } from "./routes.js";

applyTheme();

const navbarRoot = document.getElementById("navbar");
mountNavbar(navbarRoot);

const footerRoot = document.getElementById("footer");
mountFooter(footerRoot);

initRouter(routes);