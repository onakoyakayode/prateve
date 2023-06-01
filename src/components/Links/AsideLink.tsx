import React, {ReactNode} from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

const AsideLink: React.FC<NavLinkProps> = ({ href, children}) => {
    // const { asPath } = useRouter();
    const router = useRouter();
    const isActive = router.pathname === href;
    

  return (
    <Link href={href} passHref className={`${isActive ? 'flex items-center gap-[20px] bg-[#D2E6F3] text-[#1E81c4] hover:text-[#1E81C4] hover:bg-[#D2E6F3] h-[55px] md:h-[69px] pl-[15px] md:pl-[50px]' : 'flex items-center gap-[20px] hover:text-[#1E81C4] hover:bg-[#D2E6F3] h-[55px] md:h-[69px] pl-[15px] md:pl-[50px]'}`}>
        {children}
    </Link>
  )
}

export default AsideLink

