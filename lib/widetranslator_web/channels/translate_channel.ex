defmodule WidetranslatorWeb.TranslateChannel do
  require IEx;
  use Phoenix.Channel

  #ws ws://localhost:4000/socket/websocket
  #{"topic":"translator", "event":"phx_join","payload":{}, "ref":"1"}
  #{"topic":"translate:make", "ref":"1", "payload": {"from-lang":"ES", "to-lang": "EN", "from-content": "hola cómo estas", "to-content":""},"event":"phx_reply"}
  #{"topic":"translate", "payload": {"from-lang":"ES", "to-lang": "EN", "from-content": "hola cómo estas", "to-content":""}}

  #var chan = mysocket.channel("connect:1")
  #chan.join()
  #.receive("ok",resp=> console.log(resp)).receive("error",resp=> console.log(resp))
  #chan.on("translate",(payload)=> console.log(JSON.stringify(payload)))
  #chan.on("ping",(p)=>console.log(JSON.stringify(p)))
  #chan.push("translate", {"from-lang":"ES", "to-lang": "EN", "from-content": "hola cómo estas"})



  def join("connect:" <> _user_id, _params, socket) do
        {:ok, socket}

  end

  def handle_in("ping",_p, socket) do
    broadcast(socket, "ping", %{answer: "pong"})
    {:noreply,socket}
  end

  def handle_in("translate", %{"from-lang" => from,"to-lang"=>to,"from-content" => from_content}, socket) do


    IO.write("recibido mensaje")
    #translation = (String.length(from_content) > 2) && Deeplixir.translate(from_content, String.to_atom(to), String.to_atom(from))  || ""
    with {:ok,translation} <-  Deeplixir.translate(from_content, String.to_atom(to), String.to_atom(from))
    do

      {simple,ipa} = case {from,to} do
        {"EN",_} -> {Pronouncingex.pronounce(from_content),Pronouncingex.pronounce(from_content, :ipa)}
        {_,"EN"} -> {Pronouncingex.pronounce(translation),Pronouncingex.pronounce(translation, :ipa)}
        _         -> {"",""}
      end

      translation = %{"translation" => translation, "IPA" => ipa, "simple" => simple}
      IO.write("voy a retornar la traduccion")
      IO.write(translation)
      broadcast!(socket, "translate", translation)
    else
      {:error,value} ->
      IO.puts("ERROR INTENTANTO TRADUCIR #{value}")
      broadcast!(socket, "error", %{"error" => value})
    end





    {:noreply,socket}

  end
end
