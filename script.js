// Theme Container--------------------------------------------------->
const themeSideBar = document.querySelector("[data-theme-container]");
const navToggleBtn = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

navToggleBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    themeSideBar.classList.toggle("active");
  });
});
// Theme Container--------------------------------------------------->

const taskList = document.querySelector("[data-task-list]");
const taskInput = document.querySelector("[data-task-input]");
const textMessage = document.querySelector("[data-text]");
const addBtn = document.querySelector("[data-add-btn]");
const navToggleBtns = document.querySelectorAll("[data-nav-toggler]");
const themeContainer = document.querySelector("[data-theme-container]");

const createTaskItem = (text) => {
  const li = document.createElement("li");
  li.classList.add("task-item");
  li.setAttribute("data-task-item", "");

  li.innerHTML = `
      <button class="item-icon" data-task-remove="complete">
        <input type="checkbox" class= "checkbox">
      </button>
      <p class="item-text">${text}</p>
      <button class="item-action-btn" aria-label="Remove task" data-task-remove="remove">
        <ion-icon name="trash-outline" aria-hidden="true"></ion-icon>
      </button>
    `;

  return li;
};

let taskRemovers;
const addTaskItem = () => {
  const taskText = taskInput.value.trim();

  if (taskText) {
    if (taskList.childElementCount > 0) {
      taskList.append(createTaskItem(taskText));
    } else {
      taskList.append(createTaskItem(taskText));
    }
    taskInput.value = "";
    textMessage.classList.add("hide");

    taskRemovers = document.querySelectorAll("[data-task-remove]");
    taskRemovers.forEach((task) => {
      task.addEventListener("click", removeTaskItem);
    });
  } else {
    alert("Please Write Something");
  }
};

addBtn.addEventListener("click", addTaskItem);
taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTaskItem();
  }
});

const removeTaskItem = (event) => {
  const selectedEl = event.target.closest("[data-task-item]");

  if (event.target.dataset.taskRemove === "remove") {
    selectedEl.remove();
    if (taskList.childElementCount < 1) {
      textMessage.classList.remove("hide");
    }
  } else {
    selectedEl.classList.toggle("complete");
  }
};

function changeBodyBackgroundColor(element) {
  let computedStyle = getComputedStyle(element);
  let backgroundColor = computedStyle.backgroundColor;
  document.getElementsByTagName("body")[0].style.backgroundColor =
    backgroundColor;
  themeSideBar.classList.toggle("active");
}

// Date------------------------------------------------------->
let dayNumEl = document.querySelector(".day-num");
let yearEl = document.querySelector(".year");
let dayNameEl = document.querySelector(".day");
let monthEl = document.querySelector(".month");

const dayNum = new Date().getDate();
const year = new Date().getFullYear();
const dayName = new Date().toLocaleString("default", { weekday: "long" });
const monthName = new Date().toLocaleString("default", { month: "short" });

dayNumEl.textContent = dayNum;
yearEl.textContent = year;
dayNameEl.textContent = dayName;
monthEl.textContent = monthName;
// Date------------------------------------------------------->
