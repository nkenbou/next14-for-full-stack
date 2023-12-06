FROM node:20.10.0-bullseye

RUN apt-get update && apt-get install -y --no-install-recommends \
    # fonts-noto-cjk \
    chromium \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

RUN npm install --global pnpm@8.11.0

USER node:node

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm config set store-dir .pnpm-store \
 && pnpm install --frozen-lockfile

COPY . .

EXPOSE 3000 6006
CMD ["/bin/bash"]
