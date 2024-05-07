export default function Age({ age }) {
  return (
    <p>
      <p> {age > 18 ? ` Your age is ${age}` : `you are very young `}</p>
    </p>
  );
}
