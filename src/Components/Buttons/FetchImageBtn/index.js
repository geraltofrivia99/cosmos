import React from 'react';
import * as S from './styled';

// export const FetchImageButton = React.memo(({ onClick }) => (
//   <S.Btn>Fetch hd</S.Btn>
// ))

export const FetchImageButton = React.memo(({ url }) => (
  <S.Link href={url} download>Fetch hd</S.Link>
))