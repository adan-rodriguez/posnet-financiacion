export const prerender = false;

export const GET = async () => {
  console.log("get");
  return new Response(
    JSON.stringify({
      greeting: "Hola",
    })
  );
};
