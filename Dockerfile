# Use the official Node.js 14 image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the entire Angular application to the container
COPY . .

# Build the Angular application
RUN npm run build

# Expose the port that your Angular app will run on
EXPOSE 4200

# Define the command to start your Angular application
CMD ["npm", "start"]
