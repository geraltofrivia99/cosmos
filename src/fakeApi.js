// import igdb from 'igdb-api-node';

// const client = igdb('6a7afd4102871ad6fb90acc4fd713e44');

const API_KEY = 'QxmYWOHTLhHjDGsHy3gbuLLz2KKBvayNviWFhsOu';

export function fetchProfileData(string) {
    let userPromise = fetchUser(string);
    return {
      user: wrapPromise(userPromise),
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
  
  export async function fetchUser(string) {
    const url = `https://api.nasa.gov/planetary/apod?date=${string}&api_key=${API_KEY}`;
    console.log('fetchUSer')
    const response = await fetch(url);
    const json = await response.json(); 
    return json;
  }
