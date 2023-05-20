interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  content?: string;
  type: 'submit' | 'button';
}

export default function PrimaryButton({
  children,
  type,
  content,
  onClick,
}: Props) {
  return (
    <>
      {children ? (
        <button
          type={type}
          onClick={onClick}
          className="inline-flex transition duration-300 justify-center rounded-md border border-transparent bg-geraldine-light px-4 py-2 text-sm font-medium bg-opacity-20
           text-geraldine-dark hover:bg-geraldine hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          {children}
        </button>
      ) : (
        <button
          type={type}
          onClick={onClick}
          className="inline-flex justify-center transition-all duration-300 rounded-md border border-transparent bg-geraldine-light px-4 py-2 text-sm font-medium bg-opacity-20
           text-geraldine-dark hover:text-white hover:bg-geraldine focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          {content}
        </button>
      )}
    </>
  );
}
