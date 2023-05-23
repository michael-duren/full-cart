import { useField } from 'formik';

interface Props {
  placeholder: string;
  name: string;
  label?: string;
  type: string;
}

export default function Input({ label, ...props }: Props) {
  const [field, meta] = useField(props);

  return (
    <div className="flex items-start flex-col">
      <label className="hidden text-gray-600" htmlFor="props.name">
        {label}
      </label>
      <input
        className={`border-2 p-2 rounded-md ${meta.error ? 'bg-red-100' : ''}`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-xs text-red-500 p-1">{meta.error}</div>
      ) : null}
    </div>
  );
}
