const btnEl = document.getElementById("btn");

const jokeEl = document.getElementById("joke");

const apikey = "pr8LUSgIRcJ96LuwycMSzA==fpuvgnciL3m7JfCY";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apikey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try {
    jokeEl.innerText = "Updating..";
    btnEl.disabled = true;
    btnEl.innerHTML = " Loading...";
    const response = await fetch(apiURL, options);
    const data = await response.json();
    btnEl.disabled = false;
    btnEl.innerHTML = "Tell me a Joke";

    jokeEl.innerText = data[0].joke;
  } catch (error) {
    jokeEl.innerText = "An error happened , try again letter";
    btnEl.disabled = false;
    btnEl.innerHTML = "Tell me a Joke";

    console.log(error);
  }
}

btnEl.addEventListener("click", getJoke);
