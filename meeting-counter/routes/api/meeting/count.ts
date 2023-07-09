import { HandlerContext } from "$fresh/server.ts";

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  const response = {
    frames: [
      {
        icon: "34",
        text: "Hello World!",
      },
    ],
  };
  const body = JSON.stringify(response);
  return new Response(body);
};
