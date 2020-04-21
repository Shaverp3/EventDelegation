
//When the user clicks on the submit button in the new task form, print that task to the DOM
// document.querySelector("#page-content").addEventListener("click", function(){
//     if(event.target.id === "new-task-submit-btn"){
//         console.log("You clicked on the submit button")
//         const taskValue = document.querySelector("#new-task-input").value
//         console.log(taskValue)
//     }
// })

// // When the user clicks on the my-todo-list link in the Nav bar, print the form
// document.querySelector("#my-todo-list").addEventListener("click", function(){
//     const pageContentContainer = document.querySelector("#page-content");
//     pageContentContainer.innerHTML = `<h1>My To Do List</h1>`;
//     pageContentContainer.innerHTML += buildTaskForm();
// })

// document.querySelector("#family-todo-list").addEventListener("click", function(){
//     document.querySelector("#page-content").innerHTML = `<h1>Family To Do List</h1>`
// })

// document.querySelector("#completed-tasks").addEventListener("click", function(){
//     document.querySelector("#page-content").innerHTML = `<h1>Completed Tasks</h1>`
// })

//Event Delegation Practice Exercise

document.querySelector("nav").addEventListener("click", function () {
    if (event.target.id === "home") {
        const Home = event.target.id
        const pageContentContainer = document.querySelector("#page-content");
        pageContentContainer.innerHTML = buildMainContent(Home);

    } else if (event.target.id === "contact-me") {
        const Contact = event.target.id.replace("-", " ")
        const pageContentContainer = document.querySelector("#page-content");
        pageContentContainer.innerHTML = buildMainContent(Contact);
        pageContentContainer.innerHTML += buildContactForm();
        document.querySelector("#new-msg-send-btn").addEventListener("click",function(){
            pageContentContainer.innerHTML +=`<br><br>`
            pageContentContainer.innerHTML += ("Your message has been sent")
        })

    } else if (event.target.id === "about-me") {
        const About = event.target.id.replace("-", " ")
        const pageContentContainer = document.querySelector("#page-content");
        pageContentContainer.innerHTML = buildMainContent(About);

    } else if (event.target.id === "projects") {
        const Projects = event.target.id
        const pageContentContainer = document.querySelector("#page-content");
        pageContentContainer.innerHTML = buildMainContent(Projects);
    }
})
