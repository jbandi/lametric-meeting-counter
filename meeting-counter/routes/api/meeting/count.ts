export const handler = (_req: Request): Response => {
  const meetingStart = new Date().toLocaleTimeString();

  const response = {
    frames: [
      {
        icon: "34",
        text: "Meeting Cost",
      },
      {
        text: `Meeting Start Time: ${meetingStart}`,
      },
    ],
  };
  const body = JSON.stringify(response);
  return new Response(body);
};
