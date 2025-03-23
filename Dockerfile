# # FROM node:20

# # COPY . .

# # RUN npm install

# # RUN npm run build

# # EXPOSE 3000

# # CMD [ "npm", "run" , "preview" ]

# # Use Node.js 20 as the base image
# FROM node:20

# # Set working directory
# WORKDIR /app

# # Copy all project files
# COPY . .

# # Install dependencies
# RUN npm install

# # Build Vite/React app
# RUN npm run build

# # Expose the preview port (usually 4173 for Vite)
# EXPOSE 3000

# # Run Vite preview command
# CMD ["npm", "run", "preview"]

# ====================
# Step 1: Build React App
# ====================
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

# Copy all files and build the project
COPY . .
RUN npm run build

# ====================
# Step 2: Setup Nginx for Proxy
# ====================
FROM nginx:alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy built React files to Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port Nginx is running on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
