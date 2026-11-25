export function initRouter(routes) {
  function renderRoute() {
    const hash = window.location.hash || "#/overview";
    const page = routes[hash] || routes["#/404"];

    if (page) {
      page();
    }
  }

  window.addEventListener("load", renderRoute);
  window.addEventListener("hashchange", renderRoute);
}