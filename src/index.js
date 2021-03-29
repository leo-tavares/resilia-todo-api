const app = require("express")();

app.get("/todo/", (_, response) => {
  response.send(
    "Rota ativado com GET e recurso TODO valores de todo devem retornados"
  );
});

app.get("/user/", (_, response) => {
  response.send(
    "Rota ativado com GET e recurso user valores de user devem retornados"
  );
});

app.listen("3333", console.log("tudo funfando...."));
