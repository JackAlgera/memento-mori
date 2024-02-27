'use client';

import {useEffect, useState} from 'react';
import {MementoMori} from '../../_models/models';
import {MEMENTO_MORI} from '../../_mocks/mocks';
import {GlobalView} from '@/components/views/global-view/global-view';

/**
 * Home page
 * @constructor
 */
export default function Home() {
  const [mementoMori, setMementoMori] = useState<MementoMori>();

  useEffect(() => {
    setMementoMori(MEMENTO_MORI);
  }, []);

  return (mementoMori ? <GlobalView mementoMori={mementoMori} /> : <></>);
}
