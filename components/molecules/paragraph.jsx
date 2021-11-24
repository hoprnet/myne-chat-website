import PElement from "../atoms/p";

export const ParagrahpHopr = ({ className, p, title }) => {
  return (
    <div className="paragraph">
      <h3>{title}</h3>
      <PElement className={className}>{p}</PElement>
    </div>
  );
};
