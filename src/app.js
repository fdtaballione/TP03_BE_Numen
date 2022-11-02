const app = require("./server/server");

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`escuchando en puerto ${PORT}`);
});
