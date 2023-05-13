export const apiCall = (link) =>
  fetch(link).then(response => {
    console.log(response);
  return  response.json()
  })