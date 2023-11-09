import styled from 'styled-components';

export const Img = styled.img`
  width: 20px;
`;

export const EditButton = styled.button`
  border: none;
  background-color: #0f0f0f;
  cursor: pointer;
  align-items: center;
  text-align: center;
  color: #B6B6B6;
`;

export const CardWrap = styled.div`
  @media screen and (min-width: 834px) {
    display: flex;
    column-gap: 8px;
    align-items: center;
    justify-content: center;
  }
`;

export const TitleWrap = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  column-gap: 12px;
  margin-bottom: 8px;

  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fontFamily.poppins};
  font-style: normal;

  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }
`;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: center;
  justify-content: center;

  color: ${props => props.theme.colors.white};

  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  text-align: center;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    column-gap: 20px;
  }
`;

export const CarbonohidratesWrap = styled.p`
  width: 164px;
`;

export const ProteinWrap = styled.p`
  width: 92px;
`;

export const FatWrap = styled.p`
  width: 66px;
`;

export const Value = styled.span`
  color: ${props => props.theme.colors.gray};
  font-weight: 500;
`;
