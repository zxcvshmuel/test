import React from 'react';

import { useRecoilState } from 'recoil';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
// import { IMAGE_WIDTH } from '../../config/config';
import { logoHeight as logoHeightState, logoWidth as logoWidthState } from '../recoil/themes';
import { logoHeight2 as logoHeightState2, logoWidth2 as logoWidthState2 } from '../recoil/themes2';

import { checkedStripInStore } from '../recoil/root';

const Container1 = styled.div`
  ${tw`
 mt-3
 py-2
 bg-frame-xgray
 rounded-lg
`}
`;

const Section1 = styled.div`
  ${tw`
    flex
    gap-4
  `}
  position: relative;
`;

const Heading1 = styled.h1`
  ${tw`
  font-normal
  pl-4
  text-center
  mt-2
  text-color-bright
 `}
  font-size: 1.5rem;
`;

const Description = styled.div`
  ${tw`
  w-3/4
  text-sm
  text-frame-gray
  font-normal
  col-span-2
  py-2
  pl-4
  text-right
  mb-2
  leading-4
  `}
`;

const ButtonContainer = styled.span`
  ${tw`
    pl-0
  `}
`;

const Button = styled.button`
  ${tw`
    font-normal
    mb-2
    rounded-full
    h-12 w-12
    justify-center
    bg-color-bright
    border-none
    outline-none
  `}
`;

const UploadLogo = ({
  // uploadedLogo,
  setUploadedLogo,
  // uploadedLogo2,
  setUploadedLogo2,
}) => {
  const [checkedStrip] = useRecoilState(checkedStripInStore);

  const [logoHeight, setLogoHeight] = useRecoilState(logoHeightState); //eslint-disable-line
  const [logoHeight2, setLogoHeight2] = useRecoilState(logoHeightState2); //eslint-disable-line
  const [logoWidth, setLogoWidth] = useRecoilState(logoWidthState); //eslint-disable-line
  const [logoWidth2, setLogoWidth2] = useRecoilState(logoWidthState2); //eslint-disable-line

  const onInputClick = (event) => {
    event.target.value = '';
  };
  return (
    <Container1>
      <Heading1>{`העלאת לוגו `}</Heading1>
      <Section1>
        <Description>{`לחץ על האייקון להעלות לוגו`}</Description>

        <div>
          <ButtonContainer>
            <Button>
              <label htmlFor={`contained-button-file-${1}`}>
                <FontAwesomeIcon icon={faUpload} style={{ color: '#000', fontSize: '23px' }} />
              </label>
            </Button>
          </ButtonContainer>

          <input
            type="file"
            accept="image/png" //png
            style={{
              opacity: 0,
              height: 80,
              width: 80,
              cursor: 'pointer',
              position: 'absolute',
              top: -20,
              right: 0,
            }}
            id={`contained-button-file-${1}`}
            onChange={(e) => {
              if (e.target.files.length === 1) {
                if (!!checkedStrip) {
                  setUploadedLogo(URL.createObjectURL(e.target.files[0]));
                } else {
                  setUploadedLogo2(URL.createObjectURL(e.target.files[0]));
                }
                const iLogo = new Image();

                iLogo.onload = function () {
                  //eslint-disable-next-line
                  if (!!checkedStrip) {
                    let maxWidth = 110;
                    let maxHeight = 110;
                    let ratioTop = iLogo.height / iLogo.width;

                    if (ratioTop < 1) {
                      setLogoHeight(maxHeight);
                      setLogoWidth(Math.round(maxHeight / ratioTop));
                    } else {
                      setLogoWidth(maxWidth);
                      setLogoHeight(Math.round(maxWidth / ratioTop));
                    }

                    // iLogo.width = maxWidth;
                    // iLogo.height = Math.round(maxWidth / ratioTop);
                  } else {
                    let maxWidth = 110;
                    let ratioTop = iLogo.height / iLogo.width;
                    let maxHeight = 110;

                    if (ratioTop < 1) {
                      setLogoHeight2(maxHeight);
                      setLogoWidth2(Math.round(maxHeight / ratioTop));
                    } else {
                      setLogoWidth2(maxWidth);
                      setLogoHeight2(Math.round(maxWidth / ratioTop));
                    }
                    // iLogo.width = maxWidth;
                    // iLogo.height = Math.round(maxWidth / ratioTop);
                  }

                  // setNoImage(false);
                };

                iLogo.src = URL.createObjectURL(e.target.files[0]);
              } else {
                alert('שגיאה בהעלאת לוגו');
              }
            }}
            onClick={onInputClick}
          />
        </div>
      </Section1>
    </Container1>
  );
};

export default UploadLogo;
