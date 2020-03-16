import React, { useEffect, useMemo, useState } from 'react';
import { Dayli, MarsTemp } from './Pages';
import { observer } from "mobx-react";
import { DailyStore, MarsStore } from './store';
import { scrollToY, delay } from './utils';
import marsImage from './images/mars.jpg';

import * as S from './styled';

const dayliStore = new DailyStore();
const marsStore = new MarsStore();

export const App = observer(({ store }) => {
  const [imageVisible, setImageVisible] = useState(false);
  useEffect(() => {
    loadImage(setImageVisible);
    store.marsYCoord = window.innerHeight;
    const { y } = document.body.getBoundingClientRect()
    store.currentPage = Math.abs(y) / window.innerHeight;
  }, []);
  const scrollToMars = () => {
    store.setCurentPage(1);
    if (store.marsWasMounted) {
      scrollToY(store.marsYCoord);    
    } else {
      const d = delay(scrollToY, 300);
      d(store.marsYCoord);
    }
  }
  const scrollToDayli = () => {
    store.setCurentPage(0);
     if (store.dayliWasMounted) {
      scrollToY(0);    
    } else {
      const d = delay(scrollToY, 300);
      d(0);
    }
  }
  const renderMars = useMemo(() => () => {
    if ((store.currentPage !== null && store.currentPage === 1) || store.marsWasMounted) {
      if (!store.marsWasMounted) {
        store.marsWasMounted = true;
      }
      return <MarsTemp id="mars" marsData={marsStore} isImageLoad={imageVisible} image={marsImage} />
    }
    return <S.FakeView className="fakeMars"/>
  }, [store.currentPage, imageVisible])
  const renderDayli = useMemo(() => () => {
    if ((store.currentPage !== null && store.currentPage === 0) || store.dayliWasMounted) {
      if (!store.dayliWasMounted) {
        store.dayliWasMounted = true;
      }
      return <Dayli dayliData={dayliStore} />
    }
    return <S.FakeView className="fakeDayli"/>
  }, [store.currentPage])

  const onWheel = (e) => {
    
  }
  return (
    <S.Container onWheel={onWheel}>
      <S.ScrollControls>
          <div onClick={scrollToDayli}><span /><p>Go to Dayli</p></div>
          <div onClick={scrollToMars}><span /><p>Go to Mars</p></div>
      </S.ScrollControls>
      {renderDayli()}
      {renderMars()}
    </S.Container>
  )
})


function loadImage(callback) {
  const img = new Image();
     img.src = marsImage;
     img.onload = () => {
       callback(true)
     }
     img.onerror = () => {
       callback(false)
     }
}