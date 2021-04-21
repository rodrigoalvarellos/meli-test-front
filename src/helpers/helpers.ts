import texts from "../config/text.config.json";

enum Conditions {
  New = "new",
  Used = "used",
  NotSpecified = "not_specified",
}

export const setStatusText = (condition: string): string => {
  const conditionTexts = texts["item-conditions"];

  switch (condition) {
    case Conditions.New:
      return conditionTexts.new;

    case Conditions.Used:
      return conditionTexts.used;

    case Conditions.NotSpecified:
      return conditionTexts.not_specified;

    default:
      return conditionTexts.not_specified;
  }
};
