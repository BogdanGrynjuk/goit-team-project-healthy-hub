import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fontFamily.poppins};

  @media screen and (${props => props.theme.mq.mobile}) {
    padding-top: 16px;
    padding-bottom: 60px;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    padding-top: 24px;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    padding-top: 20px;
    padding-bottom: 40px;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  @media screen and (${props => props.theme.mq.mobile}) {
    width: 320px;
    padding: 0 10px;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    width: 834px;
    padding: 0 27px;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    width: 1440px;
    padding: 0 34px;
  }
`;

export const BackLink = styled(NavLink)`
  display: flex;
  @media screen and (${props => props.theme.mq.mobile}) {
    margin-right: 8px;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    margin-right: 12px;
  }
`;

export const ArrowReturn = styled.img`
  @media screen and (${props => props.theme.mq.mobile}) {
    width: 16px;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    width: 24px;
  }
`;

export const MainHeaderBlock = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MainHeader = styled.h1`
  font-weight: ${props => props.theme.fontWeights.medium};

  @media screen and (${props => props.theme.mq.mobile}) {
    font-size: 28px;
    line-height: 1.25;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    font-size: ${props => props.theme.fontSizes.xl};
    line-height: 1.2;
  }
`;

export const ElementTitle = styled.h3`
  font-weight: ${p => p.theme.fontWeights.regular};
  @media screen and (${props => props.theme.mq.mobile}) {
    font-size: ${props => props.theme.fontSizes.xs};
    line-height: 1.44;
    margin-right: 58px;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    font-size: ${props => props.theme.fontSizes.xs};
    line-height: 1.45;
    margin-right: 20px;
  }
`;

export const FoodSection = styled.ul`
  margin-top: 20px;
  display: flex;
  @media screen and (${props => props.theme.mq.mobile}) {
    flex-direction: column;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export const List = styled.div`
  background-color: ${props => props.theme.colors.black2};
  border-radius: ${props => props.theme.radii.normal};
  height: 382px;
  @media screen and (${props => props.theme.mq.mobile}) {
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    width: 780px;
    padding: 25px 31px 24px 14px;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    width: 676px;
    padding: 25px 20px 24px 14px;
  }
`;

export const FoodBlock = styled.li`
  ${'' /* width: 600px; */}
`;

export const FoodBlockHeader = styled.div`
  @media screen and (${props => props.theme.mq.mobile}) {
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
  }
`;

export const FoodHeader = styled.h2`
  width: 150px;
  font-size: 22px;
  font-weight: 400;
  line-height: 32px;
  color: #ffffff;
  margin: 0;
`;

export const Element = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  margin: 0;
  padding: 0;
`;

export const AddFoodButton = styled.button`
  display: flex;
  align-items: center;
  column-gap: 8px;
  color: ${props => props.theme.colors.greenLite};
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 20px;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  cursor: pointer;
`;

export const GoBack = styled.button`
  border: none;
  background-color: #0f0f0f;
  color: #ffffff;
  cursor: pointer;
`;

export const Img = styled.img`
  display: block;
  width: 30px;
  margin-right: 8px;
`;

export const Div1 = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (${props => props.theme.mq.mobile}) {
    margin-bottom: 10px;
}
`;

export const Div2 = styled.div`
  display: flex;
  flex-direction: row;
`;
