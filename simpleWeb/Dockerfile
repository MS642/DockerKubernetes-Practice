# Specify a base image
# Search docker hub for images with node, in this case "node" has it
# Then add the tag for that image -> alpine is a small and compact as possible
FROM node:alpine

# Change WD due to node path
WORKDIR /usr/app 

# Need to have package.json before npm install
COPY ./ ./

# Install some dependencies
RUN npm install
# Default command
CMD ["npm", "start"]