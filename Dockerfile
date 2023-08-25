FROM node:lts-alpine
ENV NODE_ENV production
WORKDIR /app
COPY --chown=node:node package*.json .
RUN npm ci --only=production
COPY --chown=node:node . .
USER node
CMD ["npm", "start"]
