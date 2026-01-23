import { Member } from '@/types';
import MemberCard from './MemberCard';

interface MembersGridProps {
  members: Member[];
}

const MembersGrid = ({ members }: MembersGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center px-29">
      {members.map((member, index) => (
        <MemberCard key={index} member={member} />
      ))}
    </div>
  );
};

export default MembersGrid;
