interface Props {
  errors: string[];
}

export default function ValidationError({ errors }: Props) {
  return (
    <div className="flex items-center justify-center">
      <div className="inline-block   bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-400 via-red-600 to-red-200  p-6 text-white drop-shadow-lg bg-opacity-80 shadow-lg  rounded-md border-red-700  my-4 capitalize">
        {errors && (
          <ul className="flex flex-col items-center justify-center">
            {errors.map((err: string, i) => {
              return (
                <li className="my-2 text-sm" key={i}>
                  {err.replaceAll("'", '')}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
