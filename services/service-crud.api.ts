export const ObtenerEntrada = async (id: number) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(response => response.json())
    .then(json => console.log(json))

  return response;
}

export const NuevaEntrada = async()=>{
  const response = "";

  return response;
}

export const EditarEntrada = async()=>{
  const response = "";
  
  return response;
}

export const EliminarEntrada = async ()=>{
  const response = "";

  return response;
}