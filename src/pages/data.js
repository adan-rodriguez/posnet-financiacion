export const prerender = false;

export async function GET() {
  const { URL_POSNET, URL_BANCOS, URL_CUOTASIMPLE } = import.meta.env;

  const endpoints = [URL_POSNET, URL_BANCOS, URL_CUOTASIMPLE];

  const data_csv = await Promise.all(endpoints.map((ep) => fetch(ep))).then(
    (responses) => Promise.all(responses.map((response) => response.text()))
  );

  return new Response(JSON.stringify({ data: data_csv }), {
    status: 200,
    headers: { "Content-Type": "application/json;charset=UTF-8" },
  });
}
