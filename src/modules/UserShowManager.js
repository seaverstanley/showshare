const remoteURL = "http://localhost:5002"

export default {
  getAttendingUsers(showId) {
    return fetch(`http://localhost:5002/userShows/?showId=${showId}&_expand=user`).then(result => result.json())
  },
  getAllUserNames() {
    return fetch(`${remoteURL}/users`).then(result => result.json())
  },
  deleteUser(id) {
    return fetch(`${remoteURL}/users/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify()
    })
    .then(result => result.json())
  },
  post(newUserShow) {
    return fetch(`${remoteURL}/userShows`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUserShow)
    }).then(data => data.json())
},
update(editedUser) {
    return fetch(`${remoteURL}/users/${editedUser.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedUser)
    }).then(data => data.json());
  }
}
