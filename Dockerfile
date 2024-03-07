FROM node:20-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable
COPY . /app
WORKDIR /app

FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build

FROM base

ARG PORT=8080
ENV PORT=${PORT}

COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/.build /app/.build

EXPOSE ${ARG}
CMD [ "pnpm", "start" ]
LABEL org.opencontainers.image.source="https://github.com/raine-works/kube-demo"
