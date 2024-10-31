
const link = "https://jsonplaceholder.typicode.com/users"

const api = async () => {
    const respuesta = await fetch(link)
    const data = await respuesta.json()
    console.log(respuesta)
    console.log(data)
}

api()
