export const getCroppedImg = (originalImageUrl) => {
  if(originalImageUrl) {
    const pathParts = originalImageUrl?.split("/media/");
  if (pathParts?.length === 2) {
    const croppedPath = `/media/crop/600/400/${pathParts[1]}`;
    return originalImageUrl?.replace(`/media/${pathParts[1]}`, croppedPath);
  }
  } else {
    // Handle the case where the original URL doesn't have "/media/"
    console.error("No image provided, using fallback 404 image");
    return "/assets/constants/404.png";
  }
};

// ty gpt and after a bit, me
