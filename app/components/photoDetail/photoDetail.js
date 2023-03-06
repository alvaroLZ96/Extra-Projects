import "./photoDetail.css";
export const generateModal = (pic) => {
  let altDescription = pic.alt_description
    ? `<p>"${pic.alt_description}"</p>`
    : "";
  return `
    <div id="modal-${pic.id}" class="hidden modal">
        <div id="modal-content">
            <button id="modal-close-${pic.id}" class="modal-close">&times;</button>
            <div class="align-center">
                 <img src=${pic.urls.regular} alt=${pic.alt_description}></img>
                 <p>${pic.user.name}</p>
                 ${altDescription}
            </div>
        </div>
    </div>`;
};
