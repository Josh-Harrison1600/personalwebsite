import { useEffect } from 'react';

// Typing effect hook
export function useTypingEffect(
  textToType: string,
  setter: React.Dispatch<React.SetStateAction<string>>,
  typingSpeed: number,
  trigger: boolean
) {
  useEffect(() => {
    if (trigger) {
      setter(''); // Reset the text
      let index = 0;

      const typeText = () => {
        setter(textToType.substring(0, index + 1));
        index++;

        if (index < textToType.length) {
          setTimeout(typeText, typingSpeed);
        }
      };

      typeText(); // Start the typing effect
    }
  }, [trigger, textToType, setter, typingSpeed]);
}
