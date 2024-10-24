#include <thread>
#include <chrono>
#include <cpprest/http_listener.h>
#include <cpprest/json.h>

using namespace web;
using namespace web::http;
using namespace web::http::experimental::listener;

class MainAPI
{
public:
  MainAPI(const std::string &address) : m_listener(address)
  {
    m_listener.support(methods::GET, std::bind(&MainAPI::handle_get, this, std::placeholders::_1));
    m_listener.support(methods::OPTIONS, std::bind(&MainAPI::handle_options, this, std::placeholders::_1)); // Soporte para OPTIONS
  }

  void start()
  {
    m_listener.open().then([this]()
                           { std::cout << "Listening on: " << m_listener.uri().to_string() << std::endl; })
        .wait();
  }

  void handle_get(http_request request)
  {
    ucout << "Received GET request" << std::endl;

    json::value response;
    response[U("message")] = json::value::string(U("OK"));

    http_response httpResponse(status_codes::OK);
    add_cors_headers(httpResponse);
    httpResponse.set_body(response);

    request.reply(httpResponse);
  }

  void handle_options(http_request request)
  {
    ucout << "Received OPTIONS request (preflight)" << std::endl;

    http_response response(status_codes::OK);
    add_cors_headers(response);
    request.reply(response);
  }

private:
  void add_cors_headers(http_response &response)
  {
    response.headers().add(U("Access-Control-Allow-Origin"), U("*"));
    response.headers().add(U("Access-Control-Allow-Methods"), U("GET, POST, OPTIONS"));
    response.headers().add(U("Access-Control-Allow-Headers"), U("Content-Type"));
  }

  http_listener m_listener;
};

int main()
{
  const std::string address = "http://0.0.0.0:8085";
  MainAPI api(address);
  api.start();

  while (true)
  {
    std::this_thread::sleep_for(std::chrono::seconds(1));
  }

  return 0;
}