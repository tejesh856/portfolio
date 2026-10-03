// Placeholder avatar. Replace by putting a real photo at /public/profile.jpg
// and swapping the <img> below back in — see README for instructions.
export default function Avatar({ size = 280, className = "" }) {
  return (
    <img
      src="/profile.jpg"
      alt="Tejesh Reddy J"
      width={size}
      height={size}
      style={{ borderRadius: 24, objectFit: "cover" }}
      className={className}
    />
  );
}
