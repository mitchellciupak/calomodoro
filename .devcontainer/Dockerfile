# ARGS
ARG NODE_VERSION="18-bullseye"

# BASE IMAGE
## https://github.com/microsoft/vscode-dev-containers/tree/v0.234.0/containers/typescript-node/.devcontainer/base.Dockerfile
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${NODE_VERSION}

# LABELS
LABEL org.opencontainers.image.authors="mitchellciupak"

# NODE DEPENDANCIES
## changes to package will force changes to subsequent layers
# COPY ./package.json /tmp/package.json
# RUN cd /tmp && npm install
# RUN mkdir -p /opt/app && cp -a /tmp/node_modules /app

# APPLICATION
# WORKDIR /app
# COPY . /app