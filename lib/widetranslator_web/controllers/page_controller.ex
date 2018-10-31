defmodule WidetranslatorWeb.PageController do
  use WidetranslatorWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
