import useMediaQuery from "./useMediaQuery";

export default function MediaQuery({
  children,
  device,
  onChange,
  ...settings
}) {
  const matches = useMediaQuery(settings, device, onChange);

  if (typeof children === "function") {
    return children(matches, device);
  }
  return matches ? children : null;
}
