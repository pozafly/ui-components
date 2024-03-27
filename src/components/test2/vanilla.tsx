import VanillaWrapper from '../vanillaWrapper';

const initiator = (wrapper: HTMLDivElement) => {
  console.log(wrapper);
};

const Test2_Vanilla = () => <VanillaWrapper initiator={initiator} />;
export default Test2_Vanilla;
