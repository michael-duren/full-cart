interface Props {
  children?: React.ReactNode;
  onClick: () => void;
  content?: string;
}

export default function PrimaryButton({ children, content, onClick }: Props) {
  return (
    <>
      {children ? (
        <button onClick={onClick} className="border-2 text-red">
          {children}
        </button>
      ) : (
        <button
          onClick={onClick}
          className="p-1 active:scale-105 rounded-md border-geraldine text-geraldine text-sm  hover:text-geraldine-dark
           bg-geraldine-light uppercase bg-opacity-10 shadow-lg hover:border-geraldine-dark border-2 text-red font-sans"
        >
          {content}
        </button>
      )}
    </>
  );
}
