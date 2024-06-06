const express = require("express");
const app = express();
const port = 4000;

let array = [
    "id",
    "nombre",
    "edad",
    "genero",
    "departamento"
]


app.get('/', (req, res) => res.send('Hello World!'))



app.listen(port, () => console.log(`Example app listening on port ${port}!`))

docker tag myapp:latest <account-id>.dkr.ecr.<region>.amazonaws.com/myapp:latest
docker push <account-id>.dkr.ecr.<region>.amazonaws.com/myapp:latest
