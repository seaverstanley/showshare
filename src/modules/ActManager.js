const remoteURL = "http://localhost:5002";

export default {
 getAll() {
    return fetch(`${remoteURL}/acts`).then(result => result.json());
  },
  delete(id) {
    return fetch(`${remoteURL}/acts/${id}`, {
      method: "DELETE"
    })
    .then (()=> fetch(`${remoteURL}/acts`))
    .then(result => result.json());
  },
}

