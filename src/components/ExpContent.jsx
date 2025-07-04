const ExpContent = ({ expContent }) => {
  return (
    <div className="card-border rounded-xl p-10">
      <h1 className="font-semibold text-3xl">{expContent.title}</h1>
      <p>{expContent.breif}</p>
      <p className="text-white-50">Key Feature</p>
      <ul className="list-disc ms-5 text-white-50">
        {expContent.Features.map((Features, index) => (
          <li key={index}>{Features}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpContent;