import { ICON_PATHS } from '@/lib/icons';

// Flat outline icon (Material Design Icons). Decorative by default; pass
// `title` when the icon is the only label for something.
export default function Icon({ name, size = 20, className = '', title }) {
  const d = ICON_PATHS[name];
  if (!d) return null;
  return (
    <svg
      className={`icon${className ? ` ${className}` : ''}`}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden={title ? undefined : 'true'}
      role={title ? 'img' : undefined}
      focusable="false"
    >
      {title && <title>{title}</title>}
      <path fill="currentColor" d={d} />
    </svg>
  );
}
