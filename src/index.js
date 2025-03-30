addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request))
});

async function handleRequest(request) {
  // Retrieve the country code from Cloudflare header
  const country = request.headers.get("cf-ipcountry") || "Not provided";
  
  // For debugging: Return a response showing the detected country code
  return new Response(`Detected country code: ${country}`, { status: 200 });
  
  // Once debugging is complete, revert to the original logic:
  // if (country.toUpperCase() === "IT" && !request.url.includes("/it")) {
  //   let newUrl = new URL(request.url);
  //   newUrl.pathname = `/it${newUrl.pathname}`;
  //   return Response.redirect(newUrl.toString(), 302);
  // }
  // return fetch(request);
}