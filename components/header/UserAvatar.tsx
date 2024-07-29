import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface UserAvatarProps {
  userName: string;
}

export const UserAvatar = ({ userName }: UserAvatarProps) => (
  <Avatar>
    <AvatarImage src='https://github.com/shadcn.png' />
    <AvatarFallback>H</AvatarFallback>
  </Avatar>
);
