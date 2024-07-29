import { AuthButton } from './AuthButton';
import { ModeToggle } from './ModeToggle';

export const Header = () => {
  return (
    <div className='flex justify-end gap-10 w-full'>
      <AuthButton />
      <ModeToggle />
    </div>
  );
};
