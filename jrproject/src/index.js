import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <div class="justify-self-center">
      <div class="mb-10 md:flex  max-w-[44%] mx-auto"><img class="content-center" src="images/Seta.svg"></img></div>
      <div class="grid grid-cols-3 gap-10 ml-52 mr-52 mb-32">
        <div class="h-full"><img src="images/Lisboa.svg"></img></div>
        <div class="h-full"><img src="images/Londres.svg"></img></div>
        <div class="h-full"><img src="images/SaoFrancisco.svg"></img></div>
      </div>

      <div class="text-center"><a><button>ENTRAR</button></a></div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
