addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request))
});

async function handleRequest(request) {
  const country = request.headers.get("cf-ipcountry") || "";
  if (country.toUpperCase() === "IT" && !request.url.includes("/it")) {
    let newUrl = new URL(request.url);
    newUrl.pathname = `/it${newUrl.pathname}`;
    return Response.redirect(newUrl.toString(), 302);
  }
  return fetch(request);
}