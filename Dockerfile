# Use an official Node.js runtime as the base image
FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY ./package.json /app

# Install dependencies
RUN npm install

# Copy the entire application to the container
COPY . /app

# Build the React app
RUN npm run build

# Use NGINX as a lightweight web server to serve the React app
CMD ["npm","start"]
