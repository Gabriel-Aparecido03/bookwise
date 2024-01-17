'use client'

import LogoSvg from '@/assets/Logo.svg'
import Image from "next/image"
import { UserProfileNavigation } from './user-profile-navigation';
import { usePathname } from 'next/navigation';
import { FaChartLine } from 'react-icons/fa';
import { PiBinocularsBold } from 'react-icons/pi';
import { ButtonNavigation } from './button-navigation';
import { Profile } from './profile';

export function NavigationBar() {

  const route = usePathname()
  const selectedSection = route.split('/')

  return (
    <aside className="w-[230px] h-[calc(100vh-70px)] rounded-lg p-8 bg-gray-700 flex flex-col justify-between items-center">
      <header className='flex flex-col gap-16'>
        <Image src={LogoSvg} alt='' />
        <div className='flex flex-col gap-3'>
          <ButtonNavigation
            icon={<FaChartLine />}
            text='Feed'
            to='/app/'
            isSelect={selectedSection.length === 2}
          />
          <ButtonNavigation
            icon={<PiBinocularsBold />}
            text='Explorer'
            to='/app/explorer'
            isSelect={selectedSection[2] === 'explorer'}
          />
          <UserProfileNavigation isSelected={selectedSection[2] === 'profile'} />
        </div>
      </header>
      <Profile />
    </aside>
  )
}