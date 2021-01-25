/* 
    @method GET httpRequest
    @param: URL of the data api
    @description
*/

// const headers = new Headers();
// headers.append("function", "GLOBAL_QUOTE");
// headers.append("symbol", "IBM");
// headers.append("apikey", "JGZ55RLK2EQWLJLP");

function httpGetRequest(url) {
  //   const requestObject = {
  //     method: "GET",
  //     headers: headers,
  //     redirect: "follow",
  //   };

  // get data and convert it to json format
  // const request = fetch(url, requestObject)
  const request = fetch(url)
    .then((res) => res.json())
    .then((result) => result);
  // return the data to the caller
  return request;
}

export default httpGetRequest;
