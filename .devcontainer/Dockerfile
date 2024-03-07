FROM mcr.microsoft.com/devcontainers/typescript-node:20 AS base

ARG USERNAME
ENV SHELL="/bin/bash"

RUN apt-get update
RUN apt-get upgrade -y
RUN usermod -l ${USERNAME} -d /home/${USERNAME} -m node
RUN echo ${USERNAME} ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/${USERNAME}

# Download and install kubectl
RUN curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl" && \
    chmod +x kubectl && \
    mv kubectl /usr/local/bin/kubectl



