FROM node:lts
EXPOSE 80
VOLUME /root/app
WORKDIR /root/app

RUN apt update
RUN apt install -y apt-utils curl git gnupg software-properties-common unzip wget zsh

RUN apt-key adv --keyserver keyserver.ubuntu.com --recv-key C99B11DEB97541F0
RUN apt-add-repository https://cli.github.com/packages
RUN apt update
RUN apt install -y gh

RUN npm i -g typescript ts-node @angular/cli @nestjs/cli nativescript @nativescript/schematics
RUN git clone https://github.com/fabriquebeweb/scop.git /root/app

RUN git clone -b docker --single-branch https://github.com/fabriquebeweb/scop.git /root/tmp
RUN for file in /root/tmp/.*; do mv $file /root; done
RUN rm -Rf /root/tmp
RUN chsh -s $(which zsh)