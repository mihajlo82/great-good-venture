export const characterChecker = (
  character: string | number,
  maxLength: number = 22
): string => {
  const charcaterToString = character.toString();

  if (charcaterToString.length > maxLength) {
    return charcaterToString.substring(0, maxLength) + "...";
  }

  return charcaterToString;
};
