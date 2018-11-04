defmodule WidetranslatorWeb.PageController do
  use WidetranslatorWeb, :controller

  def index(conn, _params) do
    #render conn, "index.html"
    #html(conn, File.read!("priv/static/index.html"))
    #revisando ruta
    #html(conn, File.read!(Application.app_dir(:widetranslator,"priv/static/index.html")))
    File.stream!(Path.join(:code.priv_dir(:widetranslator), "index.html"))
  end
end
