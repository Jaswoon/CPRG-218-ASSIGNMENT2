const expandImage = (element) => {
    // Get the source of the clicked image
    const imgSrc = element.querySelector("img").src;


    const expandedImgDiv = document.createElement("div");
    expandedImgDiv.classList.add("expanded-image");

    
    const expandedImg = document.createElement("img");
    expandedImg.src = imgSrc;

    // Append the expanded image to the div
    expandedImgDiv.appendChild(expandedImg);

    // CreatING A  semi-transparent overlay div
    const overlayDiv = document.createElement("div");
    overlayDiv.classList.add("overlay");

    document.body.appendChild(overlayDiv);

    
    document.body.appendChild(expandedImgDiv);

    // Set up event listener for clicking outside the expanded image to close it
    document.addEventListener('click', (event) => {
        if (!expandedImgDiv.contains(event.target) && !element.contains(event.target)) {
            expandedImgDiv.remove();
            overlayDiv.remove();
        }
    });

    // Set up event listener for window resize to adjust image size and overlay size
    window.addEventListener('resize', () => {
        resizeImage(expandedImg);
        resizeOverlay(overlayDiv);
    });

   
    resizeImage(expandedImg);
    resizeOverlay(overlayDiv);
}

const resizeImage = (imgElement) => {

    const maxWidth = window.innerWidth * 0.8; 
    const maxHeight = window.innerHeight * 0.8; 


    const originalWidth = imgElement.naturalWidth;
    const originalHeight = imgElement.naturalHeight;

    const aspectRatio = originalWidth / originalHeight;

    
    let newWidth = Math.min(maxWidth, originalWidth);
    let newHeight = newWidth / aspectRatio;

    
    if (newHeight > maxHeight) {
        newHeight = maxHeight;
        newWidth = newHeight * aspectRatio;
    }

   
    imgElement.style.width = `${newWidth}px`;
    imgElement.style.height = `${newHeight}px`;
}

const resizeOverlay = (overlayElement) => {
    
    overlayElement.style.width = `${window.innerWidth}px`;
    overlayElement.style.height = `${window.innerHeight}px`;
}

const toggleAccordion = (button) => {
    
    const accordionItem = button.parentNode;

    
    accordionItem.classList.toggle('active');

   
    const content = accordionItem.querySelector('.accordion-content');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
}