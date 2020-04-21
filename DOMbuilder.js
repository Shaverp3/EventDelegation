function buildTaskForm(){
    return `
    <form>
        <input type="text" id="new-task-input" placeholder="New Task" />
    </form>
    <button id="new-task-submit-btn">Submit</button>    
    `
}

function buildMainContent(selectedItem){
    // const upperCase = selectedItem.upperCase
    return `
    <h1>${selectedItem} Page </h1>
    <br>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    `
}

function buildContactForm(){
    return `
    <form>
        <input type="text" id="user-name" placeholder="Your Name" />
        <input type="text" id="user-msg" placeholder="Message" />
    </form>
    <button id="new-msg-send-btn">Send</button>    
    `
}