#The first thing we need to do is define from what image we want to build from.
# using Node v10
FROM node:10

#Next we create a directory to hold the application code inside the image, this will be the working directory for your application:
# Create app directory
WORKDIR /usr/src/lafs

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install -g @angular/cli@v6-lts 
RUN npm install

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

# EXPOSE instruction to have it mapped by the docker daemon:
# Expose port 3000 outside container
EXPOSE 4200

#define the command to run your app using CMD which defines your runtime.
# Command used to start application
CMD ng serve --host 0.0.0.0
