function setUser(userId) {
  return {
    type: 'SET_USER',
    userId: userId
  }
}

function fetchUser(userId) {
  return function(dispatch) {
    fetch(`http://localhost:3000/api/v1/users/${userId}`)
    .then(res => res.json())
    .then(user => {
      dispatch({type: 'FETCH_USER', currentUser: {id: user.id, name: user.full_name, email: user.email, avatar: user.avatar, user_trips: user.user_trips}})
    })
  }
}

export {
  setUser,
  fetchUser
}
