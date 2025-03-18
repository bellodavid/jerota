// Onboard screen content type
type OnboardContent = {
  title: string;
  description: string;
  image: any; // Will use placeholder for now
};

// Onboard screen data
export const onboardScreens: OnboardContent[] = [
  {
    title: 'Welcome to Jerota',
    description: 'Your new favorite app for productivity and organization',
    image: require('assets/images/onboard/mirror_image.png'),
  },
];

// Default screen as fallback
export const defaultScreen: OnboardContent = {
  title: 'Welcome',
  description: 'Get started with Jerota',
  image: require('assets/images/onboard/mirror_image.png'),
};
