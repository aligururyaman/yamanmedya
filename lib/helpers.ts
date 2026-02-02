export const cn = (...classes: Array<string | undefined | false>) =>
  classes.filter(Boolean).join(" ");

export const formatDate = (value: string) =>
  new Intl.DateTimeFormat("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(value));
