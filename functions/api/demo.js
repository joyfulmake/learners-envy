// TODO: Recover — Endpoint: GET /api/demo — demo mode handler
export async function onRequest({ request, env }) {
  return new Response(JSON.stringify({ error: "Function needs to be restored" }), {
    status: 501,
    headers: { "Content-Type": "application/json" }
  });
}
