'use client';
import ExploreTab from './ExploreTab';
import MyTab from './MyTab';
import TabButton from '@/components/TabButton';

import { useAuthContext } from '@/context/AuthContext';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useAppStore } from '@/zustand/store';

export default function Tabs({ characters }) {
  const [hover, setHover] = useState(false);

  const { user } = useAuthContext();
  const { tabNow, setTabNow } = useAppStore();
  const searchParams = useSearchParams();

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab) {
      setTabNow(tab);
    }
  }, []);

  function charactersShown(tab) {
    if (tab === 'explore') {
      return characters.filter((character) => character.source === 'default');
    } else if (tab === 'community') {
      return characters.filter((character) => character.source === 'community');
    }
  }
  return (
    
    <>
      <div className='flex flex-row justify-center mt-10'>
        <div className='w-[630px] grid grid-cols-2 gap-5 border-2 rounded-full p-1 border-tab'>
          <TabButton isSelected={tabNow === 'explore'} handlePress={() => setTabNow('explore')}>
            Explore Characters
          </TabButton>
          {/* <TabButton isSelected={tabNow === 'community'} handlePress={() => setTabNow('community')}>
            Community
          </TabButton> */}
          <TabButton
            isSelected={user && tabNow === 'myCharacters'}
            // isDisabled={user == null}
            isDisabled={true}
            handlePress={() => setTabNow('myCharacters')}
            style={{  cursor: 'not-allowed'}}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            My Character （Comming soon）
          </TabButton>
        </div>
      </div>
      <ExploreTab
        characters={charactersShown(tabNow)}
        isDisplay={tabNow === 'explore' || tabNow === 'community'}
      />
      {user && <MyTab isDisplay={tabNow === 'myCharacters'} />}
    </>
  );
}
