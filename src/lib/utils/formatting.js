const defaultOptions = {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
};

export function formatDate(dateToFormat, formatted, options = defaultOptions) {
  let validDate = Date.parse(dateToFormat);

  if (!isNaN(validDate)) {
    formatted = new Date(dateToFormat).toLocaleDateString("en-gb", options);
  }

  return formatted;
}
