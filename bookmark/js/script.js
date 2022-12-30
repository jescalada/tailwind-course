const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

// Tabs Menu Event Listener
tabs.forEach((tab) => {
  tab.addEventListener("click", (event) => {
    // Deactivate all tabs
    tabs.forEach((tab) => {
      tab.children[0].classList.remove("border-softRed");
    });

    // Hide all panels
    panels.forEach((panel) => {
      panel.classList.add("hidden");
    });

    // Activate a new tab and panel based on the target
    event.target.classList.add("border-softRed");
    const classString = event.target.getAttribute("data-target");
    document
      .getElementById("panels")
      .getElementsByClassName(classString)[0]
      .classList.remove("hidden");
  });
});
