export const generateUniqueId = (): string => `uid-${Date.now()}-${Math.floor(Math.random() * 999999999)}`;
