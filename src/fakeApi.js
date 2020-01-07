// import igdb from 'igdb-api-node';

// const client = igdb('6a7afd4102871ad6fb90acc4fd713e44');

const API_KEY = 'QxmYWOHTLhHjDGsHy3gbuLLz2KKBvayNviWFhsOu';

export function fetchProfileData(userId, string) {
    let userPromise = fetchUser(string);
    let postsPromise = fetchPosts(userId);
    return {
      userId,
      user: wrapPromise(userPromise),
      posts: wrapPromise(postsPromise)
    };
  }
  
  // Suspense integrations like Relay implement
  // a contract like this to integrate with React.
  // Real implementations can be significantly more complex.
  // Don't copy-paste this into your project!
  function wrapPromise(promise) {
    let status = "pending";
    let result;
    let suspender = promise.then(
      r => {
        status = "success";
        result = r;
      },
      e => {
        status = "error";
        result = e;
      }
    );
    return {
      read() {
        if (status === "pending") {
          throw suspender;
        } else if (status === "error") {
          throw result;
        } else if (status === "success") {
          return result;
        }
      }
    };
  }

  const header = {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "chicken-coop.p.rapidapi.com",
        "x-rapidapi-key": "ab05ecb6d8msh218f2f37de96f6fp1ee5e2jsnf55a953df1d4"
    }
  }
  
  export async function fetchUser(string) {
    // var str = string.replace(/ /g, '%20');
    // const url = `https://chicken-coop.p.rapidapi.com/games?title=${str}`;
    const url = `https://api.nasa.gov/planetary/apod?date=${string}&api_key=${API_KEY}`;
    // const url = 'https://images-api.nasa.gov/search?q=apollo%2011';

    console.log('fetchUSer')
    const response = await fetch(url);
    const json = await response.json(); 
    return json;
  }
  
  export function fetchPosts(userId) {
    console.log(
      "fetch posts for " + userId + "..."
    );
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("fetched posts for " + userId);
        switch (userId) {
          case 0:
            resolve([
              {
                id: 0,
                text:
                  "I get by with a little help from my friends"
              },
              {
                id: 1,
                text:
                  "I'd like to be under the sea in an octupus's garden"
              },
              {
                id: 2,
                text:
                  "You got that sand all over your feet"
              }
            ]);
            break;
          case 1:
            resolve([
              {
                id: 0,
                text:
                  "Turn off your mind, relax, and float downstream"
              },
              {
                id: 1,
                text: "All things must pass"
              },
              {
                id: 2,
                text:
                  "I look at the world and I notice it's turning"
              }
            ]);
            break;
          case 2:
            resolve([
              {
                id: 0,
                text:
                  "Living is easy with eyes closed"
              },
              {
                id: 1,
                text:
                  "Nothing's gonna change my world"
              },
              {
                id: 2,
                text: "I am the walrus"
              }
            ]);
            break;
          case 3:
            resolve([
              {
                id: 0,
                text: "Woke up, fell out of bed"
              },
              {
                id: 1,
                text: "Here, there, and everywhere"
              },
              {
                id: 2,
                text:
                  "Two of us sending postcards, writing letters"
              }
            ]);
            break;
          default:
            throw Error("Unknown user.");
        }
      }, 2000 * Math.random());
    });
  }
  