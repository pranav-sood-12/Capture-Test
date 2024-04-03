"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  initialize: () => initialize,
  placeNFAsOnWebsite: () => placeNFAsOnWebsite
});
module.exports = __toCommonJS(src_exports);

// src/transport.ts
async function transport(eventType, data) {
  const createEventMutation = `
  mutation CreateEvent($input: EventInput!) {
    createEvent(input: $input) {
      id
      type
      userID
      campaignID
      time
    }
  }
`;
  const variables = {
    input: {
      userId: "5df6793d-4933-4cc4-a556-9be520894fd3",
      campaignId: "b92e934f-663b-49ee-864c-4fbf8a087341",
      type: "click"
    }
  };
  const apiUrl = "http://localhost:1323/query";
  const body = JSON.stringify({
    query: createEventMutation,
    variables
  });
  console.log(body);
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body
    });
    console.log(response.json());
    if (response.status !== 200) {
      throw new Error("Failed to send data to server.");
    }
  } catch (error) {
    console.error("Error sending event:", error);
  }
}

// src/metrics/clicks.ts
function captureClick(element) {
  element.addEventListener("click", function(event) {
    console.log("Click event captured");
    transport("click", { elementId: element.id });
  });
}

// src/initialize.ts
function initialize(options) {
  console.log(`Capture initialized with API key: ${options.apiKey}`);
  if (options.clickIds) {
    options.clickIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        captureClick(element);
      }
    });
  }
}

// src/utils/addNFAStyles.ts
function addNFAStyles(cssRule, selector) {
  let styleElement = document.getElementById("nfaStyles");
  if (!styleElement) {
    styleElement = document.createElement("style");
    styleElement.id = "nfaStyles";
  }
  const isAdded = styleElement.innerHTML.indexOf(selector) !== -1;
  if (!isAdded)
    styleElement.innerHTML += cssRule;
  document.head.appendChild(styleElement);
}

// src/utils/createCloseButton.ts
function createCloseButton() {
  const closeButton = document.createElement("div");
  closeButton.setAttribute("role", "button");
  closeButton.setAttribute("tabindex", "0");
  closeButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15">
        <path d="M3.25,3.25l8.5,8.5M11.75,3.25l-8.5,8.5"></path>
    </svg>
    `;
  closeButton.addEventListener("click", removeNFA);
  closeButton.className = "nfa-close-btn";
  setCloseButtonStyles();
  return closeButton;
}
function setCloseButtonStyles() {
  const styles = `
        .nfa-close-btn {
            position: absolute;
            width: 1em;
            height: 1em;
            background-color: #fff;
            top: 0;
            right: 0;
            stroke: #7808FF;
            fill: #7808FF;
            stroke-width: 1.25;
            cursor: pointer;
        }

        .nfa-close-btn svg {
            pointer-events: none;
        }
    `;
  addNFAStyles(styles, "nfa-close-btn");
}
function removeNFA(event) {
  const target = event.target;
  const parent = target.parentNode;
  parent.remove();
}

// src/utils/createInfoButton.ts
function createInfoButton() {
  const infoButton = document.createElement("div");
  infoButton.setAttribute("role", "button");
  infoButton.setAttribute("tabindex", "0");
  infoButton.innerHTML = `
    <span class="info-content">Ads by Adguin</span>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15">
       <path d="M7.5,1.5a6,6,0,1,0,0,12a6,6,0,1,0,0,-12m0,1a5,5,0,1,1,0,10a5,5,0,1,1,0,-10ZM6.625,11l1.75,0l0,-4.5l-1.75,0ZM7.5,3.75a1,1,0,1,0,0,2a1,1,0,1,0,0,-2Z"></path>
    </svg>
    `;
  infoButton.className = "nfa-info-btn";
  setInfoButtonStyles();
  return infoButton;
}
function setInfoButtonStyles() {
  const styles = `
        .nfa-info-btn svg {
            position: absolute;
            height: 1em;
            width: 1em;
            top: 0;
            right: calc(1em + 3px);
            background-color: #fff;
            fill: #7808FF;
            cursor: pointer;
        }

        .nfa-info-btn .info-content {
            display: none;
            position: absolute;
            top: 0;
            right: 2.75em;
            padding: 0.1em 0.5em;
            font-size: 0.75rem;    
            background-color: #fff;
            border-radius: 0 0 0 0.5em;
        }

        .nfa-info-btn:hover .info-content {
            display: block;
        }
    `;
  addNFAStyles(styles, "nfa-info-btn");
}

// src/utils/fetchNFAImage.ts
async function fetchNFAImage(tokenId) {
  try {
    const response = await fetch(`http://localhost:1323/nft/embed?type=image&tokenId=${tokenId}`, {
      method: "GET",
      headers: {
        Accept: "text/html"
      }
    });
    const nfaSrc = await response.text();
    const nfaImage = document.createElement("img");
    nfaImage.src = nfaSrc;
    nfaImage.className = "nfa-image";
    setNFAImageStyles();
    return nfaImage;
  } catch (error) {
    console.error("Failed to generating embed code for NFA", error);
  }
}
function setNFAImageStyles() {
  const styles = `
        .nfa-image {
            width: 100%; 
            height: 100%; 
            object-fit: cover
        }
    `;
  addNFAStyles(styles, "nfa-image");
}

// src/utils/generateNFA.ts
async function generateNFA(tokenId) {
  try {
    const wrapper = document.createElement("div");
    wrapper.setAttribute("title", "Ads by Adguin");
    wrapper.className = "nfa-wrapper";
    setWrapperStyles();
    const nfaImage = await fetchNFAImage(tokenId);
    if (nfaImage) {
      const closeButton = createCloseButton();
      const infoButton = createInfoButton();
      wrapper.append(infoButton);
      wrapper.append(closeButton);
      wrapper.append(nfaImage);
    }
    return wrapper;
  } catch (error) {
    console.error("Failed to create NFA", error);
  }
}
function setWrapperStyles() {
  const styles = `
        .nfa-wrapper {
            position: relative; 
            width: fit-content; 
            height: 100%; 
            margin: 0 auto
        }
    `;
  addNFAStyles(styles, "nfa-wrapper");
}

// src/utils/createSlideDownButton.ts
function createSlideDownButton() {
  const slideDownButton = document.createElement("div");
  slideDownButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 35">   
        <g class="down" stroke="#616161" stroke-width="3px" stroke-linecap="square">
            <line x1="40" y1="17" x2="50" y2="27"></line>
            <line x1="50" y1="27" x2="60" y2="17"></line>
        </g>
    </svg>
    `;
  slideDownButton.className = "nfa-slide-down-btn";
  setSlideDownButtonStyles();
  slideDownButton.addEventListener("click", hideFooterNFA);
  return slideDownButton;
}
function setSlideDownButtonStyles() {
  const styles = `
        .nfa-slide-down-btn {
            position: absolute;
            top: -1.6em;
            left: 0;
            width: 4em;
            height: 1.5em;
            border-radius: 0.5em 0.5em 0 0;
            background-color: #f5f5f5;
            border: 2px solid #d6d6d6;
            border-bottom: none;
            cursor: pointer;
        }
    `;
  addNFAStyles(styles, "nfa-slide-down-btn");
}
function hideFooterNFA(event) {
  const target = event.target;
  const parent = target.parentNode;
  const nfaContainer = parent.parentNode;
  console.log(nfaContainer);
  nfaContainer.classList.toggle("hide");
}

// src/embeds/addNFAToStickyFooter.ts
async function addNFAToStickyFooter(tokenId) {
  try {
    const container = document.createElement("div");
    const nfa = await generateNFA(tokenId);
    if (nfa) {
      container.appendChild(nfa);
      container.dataset.tokenId = String(tokenId);
    }
    const slideDownButton = createSlideDownButton();
    container.appendChild(slideDownButton);
    document.body.appendChild(container);
    container.className = "nfa-sticky-footer";
    setNFAContainerStyles();
  } catch (error) {
    console.error("Failed to place NFA as a sticky footer", error);
  }
}
function setNFAContainerStyles() {
  const styles = `
        .nfa-sticky-footer {
            display: none;
            position: fixed;
            bottom: 0;
            width: 100%;
            height: 8em;
            padding: 0.5em;
            background-color: #f5f5f5;
            border-top: 1px solid #d6d6d6;
            border-bottom: 1px solid #d6d6d6; 
            box-sizing: border-box; 
            transition: bottom 450ms ease-in-out;               
        }

        .nfa-sticky-footer.hide {
            bottom: -7.5em;
        }

        .nfa-sticky-footer.hide .nfa-slide-down-btn svg {
            transform: scaleY(-1);
            margin-top: 0.25em;
        }

        @media(min-width: 64em) {
            .nfa-sticky-footer {
                display: block;
            } 
        }
    `;
  addNFAStyles(styles, "nfa-sticky-footer");
}

// src/utils/setNFAContainerHeight.ts
function setNFAContainerHeight(container) {
  const parent = container.parentElement;
  if (parent) {
    const width = Math.min(parent.offsetWidth * 0.8, 300);
    container.style.height = `${width}px`;
  }
}

// src/embeds/placeNFAsOnWebsite.ts
async function placeNFAsOnWebsite(containerDetails) {
  try {
    for (let item of containerDetails) {
      if (item.footer) {
        addNFAToStickyFooter(item.tokenId);
      }
      if (item.containerId) {
        const container = document.getElementById(item.containerId);
        if (container)
          embedNFAInContainer(container, item.tokenId);
      }
    }
    setNFAContainersStyles(containerDetails);
  } catch (error) {
    console.error("Failed to place NFAs on your website");
  }
}
async function embedNFAInContainer(container, tokenId) {
  const nfa = await generateNFA(tokenId);
  if (nfa) {
    container.innerHTML = "";
    container.appendChild(nfa);
    setNFAContainerHeight(container);
    container.dataset.tokenId = String(tokenId);
  }
}
function setNFAContainersStyles(containerDetails) {
  const containerIds = containerDetails.map((item) => item.containerId);
  const nfaIdSelector = containerIds.map((id) => "#" + id).join(", ");
  const styles = `
        ${nfaIdSelector} {
            width: 100%;
            margin: 1.5em 0;
            padding: 1em;
            background-color: #f5f5f5;
            border-top: 1px solid #d6d6d6;
            border-bottom: 1px solid #d6d6d6; 
            box-sizing: border-box;                
        }
    `;
  addNFAStyles(styles, nfaIdSelector);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  initialize,
  placeNFAsOnWebsite
});
