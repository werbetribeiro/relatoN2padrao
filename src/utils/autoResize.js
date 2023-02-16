
export function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}

const textareas = document.querySelectorAll("textarea")
textareas.forEach( function(node) {
    node.addEventListener('input', autoResize, false)
});