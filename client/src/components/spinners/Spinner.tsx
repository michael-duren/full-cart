import { FaSpinner } from 'react-icons/fa';

interface Props {
  size?: number;
  color?: string | undefined;
}

export default function Spinner({ size = 20, color = undefined }: Props) {
  return <FaSpinner size={size} color={color} className="animate-spin" />;
}
