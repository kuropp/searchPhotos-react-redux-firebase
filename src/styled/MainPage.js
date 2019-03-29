import styled from 'styled-components';

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavbarContainer = styled.div`
  width: 100%;
  background-color: #1C1E21;
`;

export const SideNavContainer = styled.div`
  background-color: #1C1E21;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10rem;
`;

export const ImageListContainer = styled.div`
  padding: 10px;
  display: flex; 
  flex-wrap: wrap;
  justify-content: space-around;
  overflow-y: scroll;
  background-color: ghostwhite;
`;

export const SearchTerm = styled.span`
  line-height: 5rem;
  padding-left: 2rem;
  font-size: large;
  font-weight: bold;
`;