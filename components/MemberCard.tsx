import { Member } from '@/types';

interface MemberCardProps {
  member: Member;
}

const MemberCard = ({ member }: MemberCardProps) => {
  return (
    <div className="bg-[#111] border w-[390px] border-gray-800 rounded-2xl p-5 flex flex-row items-center
      text-gray-300 shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 gap-15">
      
      {/* Profile image */}
      <img
        src={member.image}
        alt={`${member.name} profile`}
        className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-full border border-gray-600"
      />

      {/* Info section */}
      <div className="flex flex-col justify-center items-center text-center text-gray-300 space-y-2">
        <h3 className="text-[18px] font-extrabold text-white mb-1">{member.name}</h3>
        <p className="text-[10px] text-gray-400 uppercase tracking-wider">{member.role}</p>
        <p className="text-[10px] text-[#00bfff] font-medium">{member.skills.join(', ')}</p>

        {/* Social icons */}
        <div className="flex justify-center items-center gap-3 pt-1">
          {member.github && (
            <a href={member.github} target="_blank" rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors">
              <i className="fab fa-github text-[17px]"></i>
            </a>
          )}
          {member.blog && (
            <a href={member.blog} target="_blank" rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors">
              <i className="fas fa-globe text-[16px]"></i>
            </a>
          )}
          {member.linkedin && (
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors">
              <i className="fab fa-linkedin text-[17px]"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
