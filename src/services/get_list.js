const getList = (endpoint) => {
  return fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
    .then(data => data.json())
}

export default getList;
