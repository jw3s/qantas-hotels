# Use Node.js version 10
FROM node:10.11.0-alpine

ARG CI
ARG NODE_ENV

# Set the working directory
WORKDIR /usr/src

# Copy package manager files to the working directory and run install
COPY package.json yarn.lock ./
RUN yarn install --production && rm -rf ~/.npm && npm prune --production

# Copy all files to the working directory
COPY . .

# Build the app and move the resulting build to the `/public` directory
RUN yarn build
RUN mv /usr/src/build /public