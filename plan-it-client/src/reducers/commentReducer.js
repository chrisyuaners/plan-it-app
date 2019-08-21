const defaultState = {}

function commentReducer(state=defaultState, action) {
  switch(action.type) {
    case 'FETCH_TRIPS':
      let commentData = action.normalizedData.entities.comments
      if (!commentData) {
        commentData = {}
      }
      return commentData
    case 'REMOVE_TRIP':
      const commentsToDelete = action.tripObject.trip.comments
      const commentsForRemoval = {...state}

      commentsToDelete.map(comment => delete commentsForRemoval[comment])

      return commentsForRemoval
    case 'ADD_COMMENT':
      const tripComments = [...state].filter(tripComment => tripComment.tripId === action.tripId)[0]

      tripComments.comments.push(action.newComment)

      const updatedTripComments = [...state].map(tripComment => {
        if (tripComment.tripId !== action.tripId) {
          return tripComment
        }

        return {
          ...tripComment,
          ...tripComments
        }
      })
      return updatedTripComments
    default:
      return state
  }
}

export default commentReducer
