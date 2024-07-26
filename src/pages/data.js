export async function GET() {
  console.log("get");
  return new Response(
    JSON.stringify({
      greeting: "Hola",
    })
  );
}
