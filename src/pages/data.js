export const prerender = false;

export async function GET() {
  const { URL_POSNET, URL_BANCOS, URL_CUOTASIMPLE } = import.meta.env;

  const endpoints = [URL_POSNET, URL_BANCOS, URL_CUOTASIMPLE];

  const promises = endpoints.map((ep) => fetch(ep).then((res) => res.text()));

  const data_csv = await Promise.all(promises);

  return new Response(JSON.stringify(data_csv));
}
