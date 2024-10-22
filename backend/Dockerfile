FROM ubuntu:latest

WORKDIR /app

RUN apt-get update && apt-get install -y \
    g++ \
    libcpprest-dev \
    libboost-all-dev \
    libssl-dev \
    cmake

COPY src/ ./src

RUN g++ -o main ./src/main.cpp -lcpprest -lboost_system -lboost_thread -lboost_chrono -lboost_random -lssl -lcrypto

EXPOSE 8080

CMD ["./main"]
