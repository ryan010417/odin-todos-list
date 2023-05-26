// Factory funtion to create a blank project array list
export const blankProjectLoad = () => {

    console.log("called blankProjectLoad module... creating blank project array now");
    let projectArray = []; //create a blank array
    console.log("Pushing the little name of project to the projectArray....");
    let projectTitle = "Default Project";
    projectArray.push({ projectTitle });
    console.log(projectArray);
    return {projectArray, projectTitle};
}