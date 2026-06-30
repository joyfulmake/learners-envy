// TODO: Recover — Endpoint: POST /api/payment/create — payment creation
export async function onRequestPost({ request, env }) {
  return new Response(JSON.stringify({ error: "Function needs to be restored" }), {
    status: 501,
    headers: { "Content-Type": "application/json" }
  });
}
