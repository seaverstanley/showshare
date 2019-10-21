const remoteURL = "http://localhost:5002";

export default {
  post(newShow) {
    return fetch(`${remoteURL}/shows`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newShow)
    }).then(showshare => showshare.json());
  },
  getAll() {
    return fetch(`http://localhost:5002/shows?_expand=venue&_expand=act`).then(result => result.json());
  },
  getOne(id) {
    return fetch(`${remoteURL}/shows/${id}/`).then(result => result.json());
  },
  update(editedShow) {
    return fetch(`${remoteURL}/shows/${editedShow.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedShow)
    }).then(data => data.json());
  },
  delete(id) {
    return fetch(`${remoteURL}/tasks/${id}`, {
      method: "DELETE"
    })
    .then (()=> fetch(`${remoteURL}/tasks`))
    .then(result => result.json());
  },
}