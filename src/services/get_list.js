const getItems = (endpoint) => {
  return fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
    .then(response => response.json())
};

const postItem = (endpoint, payload) => {
  return fetch(`https://jsonplaceholder.typicode.com/${endpoint}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
    .then(response => response.json())
};

export { getItems, postItem };
