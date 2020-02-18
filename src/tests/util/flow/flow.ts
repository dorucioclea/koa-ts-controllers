import Boom from "@hapi/boom";

export const unauthorizedFlow = async () => {
  throw Boom.unauthorized("401 for life");
};

export const setSomethingStateFlow = async (ctx, next) => {
  ctx.state.something = "hahaha";
  await next();
};

export const setSomethingSessionFlow = async (ctx, next) => {
  if (ctx.session) {
    ctx.session.amala = "ewedu";
  }
  await next();
};

export const passFlow = async (ctx, next) => {
  await next();
};
