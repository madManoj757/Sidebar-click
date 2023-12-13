const cl = console.log;

const sideBarOpen = document.getElementById("sideBarOpen");
const sideBar = document.getElementById("sideBar");
const closeSidebar = document.querySelector("#closeSidebar");



// const ShowSidebar = () => {
//     sideBar.classList.add("active");
// }

// sideBarOpen.addEventListener("click", ShowSidebar);


const sidebarToggle = () => {
    sideBar.classList.toggle("active");
}


sideBarOpen.addEventListener("click", sidebarToggle);
closeSidebar.addEventListener("click", sidebarToggle);
