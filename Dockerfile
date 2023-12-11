FROM node:20.10.0-bullseye

RUN apt-get update && apt-get install -y --no-install-recommends \
    sudo \
    # fonts-noto-cjk \
    chromium \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/* \
 && npx playwright install-deps

ARG USERNAME=node
RUN echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

RUN npm install --global pnpm@8.11.0

USER node:node

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm config set store-dir .pnpm-store \
 && pnpm install --frozen-lockfile \
 && pnpm dlx playwright install

COPY . .

EXPOSE 3000 6006
CMD ["/bin/bash"]
