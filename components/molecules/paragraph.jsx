import PElement from "../atoms/p";

export const ParagrahpHopr = ({ className, p }) => {
  return (
    <div className="paragraph">
      <PElement className={className}>{p}</PElement>
    </div>
  );
};
