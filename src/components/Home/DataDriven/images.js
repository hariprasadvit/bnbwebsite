// Map of industry slugs/IDs to their respective images
const industryImages = {
  // Industry slugs (from URLs)
  'future-ready-banking-tech-solutions': '/fintech.png',
  'fantasy-gaming-for-sports-fans': '/Education.png',
  'healthcare-and-wellness': '/medical.png',
  'media-content-ott': '/media.png',
  'enhancing-ecommerce-for-modern-retailers': '/retail.png',
  'simplifying-property-management-with-technology': '/logistics.png',
  
  // Card IDs (from the data)
  '1': '/fintech.png',
  '2': '/Education.png',
  '3': '/medical.png',
  '4': '/media.png',
  '5': '/retail.png',
  '6': '/logistics.png',
  
  // Try with leading slash removed
  'fintech.png': '/fintech.png',
  'Education.png': '/Education.png',
  'medical.png': '/medical.png',
  'media.png': '/media.png',
  'retail.png': '/retail.png',
  'logistics.png': '/logistics.png',
  
  // Default fallback image
  default: '/Home/dataDriven.svg'
};

// Function to get the industry image based on the slug or ID
export const getIndustryImage = (identifier) => {
  if (!identifier) {
    console.log('No identifier provided, using default image');
    return industryImages.default;
  }
  
  console.log('Getting image for identifier:', identifier);
  const imagePath = industryImages[identifier] || industryImages.default;
  console.log('Resolved image path:', imagePath);
  return imagePath;
};

// Helper function to get image by card data
export const getImageForCard = (card) => {
  console.log('getImageForCard called with:', card);
  if (!card) {
    console.log('No card provided, returning default image');
    return industryImages.default;
  }
  
  // Try different ways to find the image
  const possibleKeys = [
    card.slug,
    card.id,
    card.title?.toLowerCase().replace(/[^a-z0-9]/g, '-'),
    card.image,
    card.image?.url,
    card.image?.data?.attributes?.url
  ].filter(Boolean);
  
  console.log('Trying to find image with keys:', possibleKeys);
  
  for (const key of possibleKeys) {
    if (industryImages[key]) {
      console.log(`Found image for key '${key}':`, industryImages[key]);
      return industryImages[key];
    }
  }
  
  console.log('No matching image found, using default');
  return industryImages.default;
};

export default industryImages;
