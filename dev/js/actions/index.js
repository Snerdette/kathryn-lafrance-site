export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};

export const selectProject = (project) => {
  console.log ("You've Clicked on Project: ", project.title);
  return {
      type: 'PROJECT_SELECTED',
      payload: project
  }
};