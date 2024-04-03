import { transport } from "../transport";

export function captureClick(element: HTMLElement) {
  element.addEventListener("click", function (event) {
    console.log("Click event captured");
    // Here you'll send this click event to your server using your `transport` method
    transport("click", { elementId: element.id });
  });
}
