function setUser(userId) {
  return {
    type: 'SET_USER',
    currentUserId: parseInt(userId)
  }
}

export {
  setUser
}
