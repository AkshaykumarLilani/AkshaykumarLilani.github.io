export const downloadResume = (event) => {
    if (event.ctrlKey) {

    } else {
        window.open("/Resume.pdf", "_blank");
    }
}