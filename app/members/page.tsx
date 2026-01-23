import Navbar from '@/components/Navbar';
import MembersGrid from '@/components/MembersGrid';
import { Member } from '@/types';

const members: Member[] = [
  {
    name: "xDU0",
    role: "Co-leader",
    skills: ["DFIR"],
    github: "https://github.com/xDU00",
    blog: "https://xdu00.github.io",
    image: "https://avatars.githubusercontent.com/u/124378926?v=4"
  },
  {
    name: "Blade",
    role: "Co-leader",
    skills: ["DFIR/OSINT"],
    linkedin: "https://www.linkedin.com/in/hatem-ben-hadj-hassen-a12776245/",
    github: "https://github.com/unholy-blade",
    image: "https://i.pinimg.com/originals/e2/3c/67/e23c67c1c2858dfaebe0a6383fd1d699.gif"
  },
  {
    name: "square",
    role: "member",
    skills: ["WEB"],
    blog: "https://squar3.site/",
    github: "https://github.com/FatSquare",
    image: "https://avatars.githubusercontent.com/u/69780128?v=4"
  },
  {
    name: "Konan",
    role: "member",
    skills: ["WEB"],
    github: "https://github.com/KKonaNN",
    image: "https://avatars.githubusercontent.com/u/87090666?v=4"
  },
  {
    name: "sn0_0wyy",
    role: "member",
    skills: ["DFIR"],
    linkedin: "https://www.linkedin.com/in/sami-jhin-ba4169294/",
    github: "https://github.com/sn0-0wyy",
    image: "https://raw.githubusercontent.com/Hilmi-z/pics-for-project/refs/heads/main/243677050_1585958308418044_6938801003847756136_n.jpg"
  },
  {
    name: "stortny",
    role: "member",
    skills: ["PWN"],
    blog: "https://stortny.tech",
    image: "https://i.pinimg.com/originals/47/c9/55/47c9552e5cc72583c617c30cd378fbf0.gif"
  },
  {
    name: "Fries",
    role: "member",
    skills: ["REV"],
    linkedin: "https://www.linkedin.com/in/ons-najjar-246788337/",
    image: "https://media.tenor.com/rUdNSJQOiU8AAAAM/dechartgames-hungry-garden.gif"
  },
     {
    name: "Deadnaut",
    role: "member",
    skills: ["crypto"],
    blog: "https://deadnaut.me/",
    linkedin: "https://www.linkedin.com/in/mazenelheni/",
    github: "https://github.com/Deadnaut0",
    image: "https://deadnaut.me/img/author.gif"
  }
];

export default function Members() {
  return (
    <>
    <Navbar />
    <div className="pt-20 min-h-screen">
      <div id="members" className="w-full pb-24 py-10">
        <h2 className="text-2xl md:text-3xl mb-8 text-center">Members</h2>
        <MembersGrid members={members} />
      </div>
    </div>
  </>
  );
}