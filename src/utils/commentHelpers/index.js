/*
    This function is used to find the comment given its ancestries
  */
  export function findCurrentComment(ancestries, comments) {
    const oldest = ancestries[0]
    let oldestComment = null
    const nextIndex = _.findIndex(comments, function(obj) {
      return obj.id.toString() === oldest
    })

    oldestComment = comments[nextIndex]
    const newAncestries = [...ancestries.slice(1)]
    if (!oldestComment || (!oldestComment.descendants && newAncestries.length > 0)) {
      
      return null;
    }
    if (newAncestries.length === 0) {
      return oldestComment;
    } else {
      return this.findCurrentComment(newAncestries, oldestComment.descendants)
    }
  }

  /*
    This function is used to find the comment given its ancestries
  */
  export const findCurrentCommentAndItsParent = function(ancestries, comments, parent) {
    const oldest = ancestries[0]
    let oldestComment = null
    const nextIndex = _.findIndex(comments, function(obj) {
      return obj.id.toString() === oldest
    })

    oldestComment = comments[nextIndex]
    const newAncestries = [...ancestries.slice(1)]
    if (!oldestComment || (!oldestComment.descendants && newAncestries.length > 0)) {
      
      return null;
    }
    else if (newAncestries.length === 0) {
      return [oldestComment, parent];
    } else {
      parent = oldestComment
      return findCurrentCommentAndItsParent(newAncestries, oldestComment.descendants, parent)
    }
  }

  export const deleteComment = function(comment_id, comments_tree) {
    if(comments_tree.length > 0) {
      const index = _.findIndex(comments_tree, (c) => {
        return c.id === comment_id
      })
      if (index > -1) {
        comments_tree.splice(index, 1)
      } else {
        comments_tree.forEach((c) => {
          deleteComment(comment_id, c.descendants)
        })
      }
    }
  }
