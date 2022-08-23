document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    handleTask(e.target.newTask.value);
  });

  function handleTask(task) {
    let li = document.createElement("li");
    let del = document.createElement("button");
    li.innerHTML = task;
    document.querySelector("ul").appendChild(li);
    document.querySelector("li").appendChild(del);
    document.querySelector("button").addEventListener("click", () => {
      document.querySelector("li").remove();
    });
  }
});
