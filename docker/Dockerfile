FROM ubuntu:20.10

ENV PATH="/usr/games:${PATH}"
RUN apt-get update && \
  apt-get upgrade -y && \
  apt-get install -y fortune curl && \
  apt-get install -y --no-install-recommends cowsay && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/*

COPY post-cow-fortune-to-slack /usr/bin

ENTRYPOINT ["post-cow-fortune-to-slack"]
