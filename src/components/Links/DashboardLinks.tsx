import React, {ReactNode} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'


type DashboardLinkProps = {
    href: string;
    children: ReactNode;
}

const DashboardLinks: React.FC<DashboardLinkProps> = ({ href, children}) => {
    const { asPath } = useRouter();
    const isActive = href === asPath
    return (
    <Link href={href} className={`${isActive ? 'text-primaryColor relative after:content-[""] after:mb-[18px] after:w-[150%] after:h-[2px] after:bg-primaryColor after:absolute after:top-[42.5px] after:left-[-40px]' : 'text-[#D5D5D5] hover:relative hover:after:content-[""] hover:after:mb-[16px] hover:after:w-[140%] hover:after:h-[2px] hover:text-primaryColor hover:after:after:bg-primaryColor hover:after:absolute hover:after:top-[39.5px] hover:after:left-[-20px]'}`}>
        {children}
    </Link>
  )
}

export default DashboardLinks
