const remoteURL = "http://localhost:5002";

export default {
 getAll() {
    return fetch(`${remoteURL}/venues`).then(result => result.json());
  }}