import { clickLabelEvent, observeElements } from "./utils.js";

const labelElements = document.querySelectorAll("label");

const sectionElements = document.querySelectorAll("section");

labelElements.forEach(clickLabelEvent);

observeElements(sectionElements);
