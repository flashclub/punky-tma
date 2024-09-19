import PopUp from "./PopUp";

export default function Store({ onClose }: { onClose: () => void }) {
  return (
    <PopUp onClose={onClose}>
      <p>store</p>
    </PopUp>
  );
}
