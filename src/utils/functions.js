// Generate Auth token for verifying login state
export function generateToken() {
  return (
    Math.random().toString(36) +
    Math.random().toString(2) + 
    Math.random().toString(36) +
    Math.random().toString(10) +
    Math.random().toString(2) + 
    Math.random().toString(36) +
    Math.random().toString(10)
  );
}
