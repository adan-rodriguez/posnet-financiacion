export const prerender = false;

export async function GET() {
  const urlPosnet =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRk6IZqqnmSDcuNEe5ymrviwG259ciagRbszQ-rl1I6wIsDEbwkQs1O67hvQZUNkGIdGcUYskbZyXhi/pub?gid=0&single=true&output=csv";

  const urlBancos =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRk6IZqqnmSDcuNEe5ymrviwG259ciagRbszQ-rl1I6wIsDEbwkQs1O67hvQZUNkGIdGcUYskbZyXhi/pub?gid=76171544&single=true&output=csv";

  const urlCuotaSimple =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRk6IZqqnmSDcuNEe5ymrviwG259ciagRbszQ-rl1I6wIsDEbwkQs1O67hvQZUNkGIdGcUYskbZyXhi/pub?gid=773839087&single=true&output=csv";

  const endpoints = [urlPosnet, urlBancos, urlCuotaSimple];

  const promises = endpoints.map((ep) => fetch(ep).then((res) => res.text()));

  const data_csv = await Promise.all(promises);

  return new Response(JSON.stringify(data_csv));
}
