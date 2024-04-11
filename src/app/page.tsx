'use client';

import {useEffect, useState} from 'react';
import {MementoMori} from '../../_models/models';
import {MEMENTO_MORI} from '../../_mocks/mocks';
import {GlobalView} from '@/components/views/global-view/global-view';
import {useRouter} from 'next/navigation';
import {useGetGlobalYears} from '@/_services/services.hook';

/**
 * Home page
 * @constructor
 */
export default function Home() {
  const router = useRouter();
  const mementoMori = useGetGlobalYears();

  const onYearClick = (year: number) => {
    router.push(`/years/${year}`);
  };

  if (!mementoMori) return (<></>);

  return (<GlobalView onYearClick={onYearClick} mementoMori={mementoMori} />);
}
