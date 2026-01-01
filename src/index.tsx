

interface CodePenProps {
  onClose: () => void;
}

const CodePen: React.FC<CodePenProps> = ({ onClose: _onClose }) => {
  return (
    <div className="h-full w-full bg-[#1e1f26]">
      <iframe
        src="https://codepen.io/pen/"
        className="w-full h-full border-0"
        allow="accelerometer; camera; encrypted-media; geolocation; gyroscope; microphone"
        title="CodePen"
      />
    </div>
  );
};

export default CodePen;
