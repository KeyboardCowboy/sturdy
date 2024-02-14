# Use the official DDEV web image as a base
ARG BASE_IMAGE=drud/ddev-webserver:v1.18.0
FROM $BASE_IMAGE

# Install make.
RUN apt-get update && apt-get install -y build-essential

# Install Gatsby CLI.
RUN npm install -g gatsby-cli

# Install task.
RUN npm install -g @go-task/cli
