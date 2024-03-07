FROM mcr.microsoft.com/devcontainers/typescript-node:20 AS base

ARG USERNAME
ENV SHELL="/bin/bash"

RUN apt-get update
RUN apt-get upgrade -y
RUN usermod -l ${USERNAME} -d /home/${USERNAME} -m node
RUN echo ${USERNAME} ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/${USERNAME}



