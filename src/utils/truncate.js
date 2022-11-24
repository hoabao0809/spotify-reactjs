export default function truncate(string, number) {
  return string?.length > number
    ? string.substr(0, number - 1) + '...'
    : string;
}
