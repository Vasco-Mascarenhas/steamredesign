export const getCroppedImg = (originalImageUrl) => {
  const pathParts = originalImageUrl.split("/media/");
  if (pathParts.length === 2) {
    const croppedPath = `/media/crop/600/400/${pathParts[1]}`;
    return originalImageUrl.replace(`/media/${pathParts[1]}`, croppedPath);
  } else {
    // Handle the case where the original URL doesn't have "/media/"
    console.error("Invalid original image URL format");
    return originalImageUrl;
  }
};

// ty gpt
