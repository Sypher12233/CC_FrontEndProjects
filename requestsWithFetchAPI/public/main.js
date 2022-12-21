// NOTE: wordSmith functions from lines 4 - 41
// NOTE: byteSize functions from lines 43 - 85 (remember to add your API key!)

/*
wordSmith
*/
// Information to reach API
const dataMuseUrl = "https://api.datamuse.com/words?";
const queryParams = "rel_jja=";

// Selecting page elements
const inputField = document.querySelector("#input");
const submit = document.querySelector("#submit");
const responseField = document.querySelector("#responseField");

// Asynchronous function
// Code goes here
// const getSuggestions = async () => {
//   const wordQuery = inputField.value;
//   const endpoint = `${dataMuseUrl}${queryParams}${wordQuery}`;
//   try {
//     const response = await fetch(endpoint, { cache: "no-cache" });
//     if (response.ok) {
//       const jsonResponse = await response.json();
//       renderWordResponse(jsonResponse);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
const getSuggestions = async () => {
  const wordQuery = inputField.value;
  // const endpoint = dataMuseUrl+queryParams+wordQuery;
  const endpoint = `${dataMuseUrl}${queryParams}${wordQuery}`;
  try {
    const response = await fetch(endpoint, { cache: "no-cache" });
    if (response.ok) {
      const jsonResponse = await response.json();
      renderWordResponse(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
};

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener("click", displaySuggestions);

/*
byteSize
*/
// information to reach API
const apiKey = "9d114530c27948e093129e9c60bc25f0";
const rebrandlyEndpoint = "https://api.rebrandly.com/v1/links";

// Some page elements
const shortenButton = document.querySelector("#shorten");

// Asynchronous functions
// Code goes here
// const shortenUrl = async () => {
//   const urlToShorten = inputField.value;
//   const data = JSON.stringify({ destination: urlToShorten });
//   try {
//     const response = await fetch(rebrandlyEndpoint, {
//       method: "POST",
//       body: data,
//       headers: {
//         "Content-type": "application/json",
//         apikey: apiKey,
//       },
//     });
//     if (response.ok) {
//       const jsonResponse = await response.json();
//       renderByteResponse(jsonResponse);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const response = fetch(rebrandlyEndpoint, {
    method: "POST",
    body: JSON.stringify({ destination: urlToShorten }),
    headers: {
      "Content-Type": "application/json",
      apikey: apiKey,
    },
  }).then((response) => {
    if (response.ok) {
      renderByteResponse(response.json);
    }
    throw new Error("Request failed!");
  });
};

// Clear page and call Asynchronous functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
};

shortenButton.addEventListener("click", displayShortUrl);
