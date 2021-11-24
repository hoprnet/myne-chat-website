import "rc-collapse/assets/index.css";

import Collapse from "rc-collapse";
let Panel = Collapse.Panel;

export const CollapseElement = ({}) => {
  return (
    <div className="accordion">
      <Collapse accordion={true}>
        <Panel header="How do install myne?" headerClass="my-header-class">
          <p>
            When you use our services, you are trusting us with your information
          </p>
        </Panel>
        <Panel header="How do install myne?">
          <p>
            When you use our services, you are trusting us with your information
          </p>
        </Panel>
        <Panel header="How do install myne?">
          <p>
            When you use our services, you are trusting us with your information
          </p>
        </Panel>
      </Collapse>
    </div>
  );
};
