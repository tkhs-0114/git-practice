FROM node:23
RUN apt update && apt install -y sudo \
    && echo "node ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers
WORKDIR /workspace
# CMD sh ./init.sh