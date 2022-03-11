const listItems = document.querySelectorAll(".list-item")
const tabContent = document.querySelectorAll(".tab-content")

function selectItem() {
    const viewContent = document.getElementById(this.id)
    console.log(viewContent)
}

listItems.addEventListener("click", selectItem())