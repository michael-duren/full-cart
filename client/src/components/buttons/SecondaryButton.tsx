interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  content?: string;
  type: 'submit' | 'button';
}

export default function SecondaryButton({
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
          className="inline-flex justify-center rounded-md border border-transparent bg-h-pink-light px-4 py-2 text-sm font-medium bg-opacity-20
           text-h-pink-dark hover:bg-h-pink transition-all duration-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          {children}
        </button>
      ) : (
        <button
          type={type}
          onClick={onClick}
          className="inline-flex justify-center rounded-md border border-transparent bg-h-pink-light px-4 py-2 text-sm font-medium bg-opacity-20
								transition-all duration-300
           text-h-pink-dark hover:text-white hover:bg-h-pink focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          {content}
        </button>
      )}
    </>
  );
}
