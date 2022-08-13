import { DefaultTools } from "../../components/Tools";

const Tools = ({ slice: { primary, items, variation }, i }) => {
  const componentMap = {
    "default-slice": DefaultTools,
  };

  const VariableComponent = componentMap[variation];

  return <VariableComponent id={`${i}-cta-slice`} {...primary} items={items} />;
};

export default Tools;
