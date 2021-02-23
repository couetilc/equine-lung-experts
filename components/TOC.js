export default function TOC({ title = 'Table of Contents', children }) {
  return (
    <div className="table-of-contents">
      <h1>{title}</h1>
      {children}
    </div>
  );
}

