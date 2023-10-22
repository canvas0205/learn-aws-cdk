FROM node:20.6-slim

ENV TZ Asia/Tokyo

# 必要なツールをインストール
RUN apt-get update && apt-get install -y \
    curl \
    && apt-get clean \
    && apt-get install wget \
    && apt-get install unzip \
    && apt-get install -y git

# AWS CDKのインストール
RUN npm install -g typescript@5.1.6

# AWS CLIのインストール
RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64-2.13.25.zip" -o "awscliv2.zip"
RUN unzip awscliv2.zip
RUN ./aws/install
RUN rm -rf awscliv2.zip
RUN rm -rf /aws

# AWS CDKのインストール
RUN npm install -g aws-cdk@2.101.0
RUN alias cdk="npx aws-cdk"