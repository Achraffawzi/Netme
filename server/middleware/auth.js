import { decodeToken } from "~/server/utils/jwt.js";
import URLPattern from "url-pattern";

export default defineEventHandler((event) => {
  // endpoints to be handled by this middleware
  const ENDPOINTS = [
    "/api/auth/logout",
    "/api/users/user",
    "/api/users/picture",
    "/api/posts/user",
    "/api/follows/user",
  ];

  // check if upcoming req is handled by this middleware
  const isHandledByAuthMiddleware = ENDPOINTS.some((endpoint) => {
    const pattern = new URLPattern(endpoint);
    return pattern.match(event.node.req.url);
  });

  if (!isHandledByAuthMiddleware) return;

  const { access_token } = parseCookies(event);

  if (!access_token) {
    return sendError(event, {
      statusCode: 403,
      statusMessage: "You're unauthorized",
    });
  }

  // decode access_token
  const { _id } = decodeToken(access_token);
  event.context._id = _id;
});
